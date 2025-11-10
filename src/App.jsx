import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Data Science Portfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
