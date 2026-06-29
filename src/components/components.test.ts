import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AboutSection from './AboutSection.vue';
import ContactSection from './ContactSection.vue';
import DashboardSection from './DashboardSection.vue';
import HeroSection from './HeroSection.vue';
import ProjectsSection from './ProjectsSection.vue';
import ResumeSection from './ResumeSection.vue';
import AppFooter from './AppFooter.vue';
import { LINKEDIN_URL } from '~/constants/contactData';

describe('HeroSection', () => {
  it('renders the professional headline', () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.text()).toContain('Full Stack & AI / Data Engineer');
    expect(wrapper.text()).toContain('Anahita Bagheri Kalhor');
  });

  it('links to the updated LinkedIn profile', () => {
    const wrapper = mount(HeroSection);
    const link = wrapper.find('a.btn-outline[href*="linkedin.com"]');
    expect(link.attributes('href')).toBe(LINKEDIN_URL);
    expect(link.attributes('target')).toBe('_blank');
  });
});

describe('DashboardSection', () => {
  it('renders four KPI cards', () => {
    const wrapper = mount(DashboardSection);
    expect(wrapper.find('[data-testid="kpi-grid"]').element.children).toHaveLength(4);
  });

  it('renders a 12-row project summary table', () => {
    const wrapper = mount(DashboardSection);
    expect(wrapper.findAll('[data-testid="summary-table"] tbody tr')).toHaveLength(12);
  });
});

describe('ResumeSection', () => {
  it('renders core skills and experience', () => {
    const wrapper = mount(ResumeSection);
    expect(wrapper.text()).toContain('Core Skills');
    expect(wrapper.text()).toContain('Angler Solutions');
  });
});

describe('ProjectsSection', () => {
  it('renders all project cards', () => {
    const wrapper = mount(ProjectsSection);
    expect(wrapper.findAll('.project-card')).toHaveLength(12);
  });
});

describe('ContactSection', () => {
  it('keeps Netlify form fields and corrected LinkedIn URL', () => {
    const wrapper = mount(ContactSection);
    expect(wrapper.find('form[name="contact"]').exists()).toBe(true);
    expect(wrapper.find('input[name="name"]').attributes('required')).toBeDefined();
    expect(wrapper.find(`a[href="${LINKEDIN_URL}"]`).exists()).toBe(true);
  });
});

describe('Footer and About', () => {
  it('footer exposes LinkedIn with the correct href', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.find(`a[href="${LINKEDIN_URL}"]`).exists()).toBe(true);
  });

  it('about section renders professional personal context', () => {
    const wrapper = mount(AboutSection);
    expect(wrapper.text()).toContain('A little more about me');
    expect(wrapper.text()).toContain('problem-solving');
  });
});
