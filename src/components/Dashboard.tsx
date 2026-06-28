import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import projectData from '../constants/projectData';
import skillsData from '../constants/skillsData';
import resumeData from '../constants/resumeData';
import {
  averageSkillByCategory,
  computeKpis,
  getProjectsByCategory,
  getTopTechnologies,
  summarizeProjects,
} from '../lib/analytics';

const CHART_COLORS = ['#2563eb', '#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

const CURRENT_YEAR = new Date().getFullYear();

const Dashboard = () => {
  const kpis = computeKpis(projectData, resumeData.experience, CURRENT_YEAR);
  const topTech = getTopTechnologies(projectData, 8).map((entry) => ({
    name: entry.label,
    count: entry.count,
  }));
  const byCategory = getProjectsByCategory(projectData).map((entry) => ({
    name: entry.label,
    value: entry.count,
  }));
  const skillByCategory = averageSkillByCategory(skillsData).map((entry) => ({
    name: entry.label,
    average: entry.average,
  }));
  const tableRows = summarizeProjects(projectData);

  const kpiCards = [
    { label: 'Projects shipped', value: kpis.totalProjects },
    { label: 'Live demos', value: kpis.liveDemos },
    { label: 'Technologies', value: kpis.distinctTechnologies },
    { label: 'Years experience', value: `${kpis.yearsExperience}+` },
  ];

  return (
    <section id="dashboard" className="dashboard-section container">
      <h2 className="section-heading text-center">Portfolio at a Glance</h2>
      <p className="section-subheading text-center">
        A data-driven summary of my work — the technologies I use most, where my
        projects focus, and how my skill set is distributed.
      </p>

      <div className="kpi-grid" data-testid="kpi-grid">
        {kpiCards.map((card) => (
          <div className="kpi-card" key={card.label}>
            <span className="kpi-value">{card.value}</span>
            <span className="kpi-label">{card.label}</span>
          </div>
        ))}
      </div>

      <div className="chart-grid">
        <article className="chart-card">
          <h3 className="chart-title">Most-used technologies</h3>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topTech} margin={{ top: 8, right: 16, bottom: 8, left: -8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-25} dy={10} height={56} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="count" radius={[6, 6, 0, 0]} fill="#2563eb" name="Projects" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="chart-card">
          <h3 className="chart-title">Projects by focus area</h3>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={byCategory}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={48}
                  paddingAngle={2}
                >
                  {byCategory.map((entry, index) => (
                    <Cell key={entry.name} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="chart-card chart-card--wide">
          <h3 className="chart-title">Average proficiency by skill area</h3>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillByCategory}
                layout="vertical"
                margin={{ top: 8, right: 24, bottom: 8, left: 24 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="average" radius={[0, 6, 6, 0]} fill="#10b981" name="Proficiency">
                  {skillByCategory.map((entry, index) => (
                    <Cell key={entry.name} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>

      <div className="table-wrap">
        <h3 className="chart-title">Project summary</h3>
        <table className="summary-table" data-testid="summary-table">
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Focus area</th>
              <th scope="col">Primary tech</th>
              <th scope="col">Stack size</th>
              <th scope="col">Live demo</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.title}>
                <th scope="row">{row.title}</th>
                <td>{row.category}</td>
                <td>{row.primaryTech}</td>
                <td>{row.techCount}</td>
                <td>
                  <span
                    className={`badge ${row.hasLiveDemo ? 'badge--yes' : 'badge--no'}`}
                  >
                    {row.hasLiveDemo ? 'Yes' : 'CLI only'}
                  </span>
                </td>
                <td>
                  <a href={row.repoUrl} target="_blank" rel="noopener noreferrer">
                    Repo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
