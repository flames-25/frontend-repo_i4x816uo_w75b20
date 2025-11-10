import React from 'react';
import { Brain, ChartBar, Code } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Brain, title: 'Machine Learning', desc: 'Supervised/unsupervised learning, model selection, feature engineering, and MLOps.' },
    { icon: ChartBar, title: 'Analytics', desc: 'Experimentation, A/B testing, causal inference, and business-focused storytelling.' },
    { icon: Code, title: 'Engineering', desc: 'Clean pipelines, APIs, and reproducible notebooks using Python, SQL, and cloud tooling.' },
  ];

  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">About Me</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          I’m a data scientist passionate about building products that combine rigorous analysis with
          delightful user experiences. I value clarity, pragmatism, and measurable impact.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-teal-400/40">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-teal-500/10 p-2 ring-1 ring-teal-400/30">
                  <Icon className="h-5 w-5 text-teal-300" />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
