import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/20 to-slate-950" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/15 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-teal-300" />
            <span>Data Science • AI • Analytics</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Your Data Scientist</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I build data-driven products that turn raw information into clear decisions. From
            predictive modeling and experimentation to production-grade dashboards and APIs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-white shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-slate-100 ring-1 ring-white/15 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              download
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
