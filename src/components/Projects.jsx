import React from 'react';
import { BarChart3, BrainCircuit, LineChart, Database } from 'lucide-react';

const projects = [
  {
    title: 'Demand Forecasting',
    icon: LineChart,
    tags: ['Time Series', 'Prophet', 'Production'],
    blurb: 'End-to-end forecasting pipeline that improved inventory planning accuracy by 18%.',
    link: '#',
  },
  {
    title: 'Churn Prediction',
    icon: BrainCircuit,
    tags: ['Classification', 'XGBoost', 'Explainability'],
    blurb: 'Customer churn model with SHAP-based insights integrated into CRM workflows.',
    link: '#',
  },
  {
    title: 'Marketing Mix Model',
    icon: BarChart3,
    tags: ['Causal', 'Bayesian', 'Optimization'],
    blurb: 'Budget optimizer powered by a probabilistic MMM increasing ROAS by 12%.',
    link: '#',
  },
  {
    title: 'Data Platform Starter',
    icon: Database,
    tags: ['ETL', 'dbt', 'Airflow'],
    blurb: 'Composable data stack template for fast analytics and experimentation.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-3 max-w-2xl text-slate-300">A selection of work across ML systems, analytics, and platform engineering.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg bg-white/10 px-4 py-2 text-sm text-slate-100 ring-1 ring-white/15 hover:bg-white/20 sm:block">Work with me</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, icon: Icon, tags, blurb, link }) => (
            <a key={title} href={link} className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-teal-400/40">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-teal-500/10 p-2 ring-1 ring-teal-400/30">
                  <Icon className="h-5 w-5 text-teal-300" />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-900/60 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-5 text-sm text-teal-300 opacity-0 transition group-hover:opacity-100">View details →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
