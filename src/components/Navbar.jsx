import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur">
          <a href="#" className="text-sm font-semibold tracking-wide text-white">DS Portfolio</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="#contact" className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
