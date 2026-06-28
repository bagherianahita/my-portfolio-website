import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../components/App';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Dashboard from '../components/Dashboard';
import { LINKEDIN_URL } from '../constants/contactData';

describe('App', () => {
  it('renders all primary sections', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Anahita Bagheri Kalhor/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Portfolio at a Glance/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Resume$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Projects$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^About Me$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Get in Touch/i })).toBeInTheDocument();
  });
});

describe('Hero', () => {
  it('links to the updated LinkedIn profile', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /^LinkedIn$/i });
    expect(link).toHaveAttribute('href', LINKEDIN_URL);
    expect(link).toHaveAttribute('target', '_blank');
  });
});

describe('Footer', () => {
  it('exposes LinkedIn with the correct href', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /^LinkedIn$/i })).toHaveAttribute('href', LINKEDIN_URL);
  });
});

describe('Contact', () => {
  it('shows linkedin.com/in/anadevpmp in contact details', () => {
    render(<Contact />);
    const link = screen.getByRole('link', { name: /linkedin\.com\/in\/anadevpmp/i });
    expect(link).toHaveAttribute('href', LINKEDIN_URL);
  });

  it('keeps the Netlify contact form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/^Name$/i)).toBeRequired();
    expect(screen.getByLabelText(/^Email$/i)).toBeRequired();
    expect(screen.getByLabelText(/^Message$/i)).toBeRequired();
  });
});

describe('Dashboard', () => {
  it('renders four KPI cards', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('kpi-grid').children).toHaveLength(4);
  });

  it('renders a summary table with 12 project rows', () => {
    render(<Dashboard />);
    const table = screen.getByTestId('summary-table');
    expect(table.querySelectorAll('tbody tr')).toHaveLength(12);
  });

  it('includes chart section headings', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Most-used technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects by focus area/i)).toBeInTheDocument();
    expect(screen.getByText(/Average proficiency by skill area/i)).toBeInTheDocument();
  });
});
