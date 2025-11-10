import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Demo only – normally this would call a backend endpoint.
      await new Promise((res) => setTimeout(res, 800));
      setStatus('Thanks! I will get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-teal-500/10 p-2 ring-1 ring-teal-400/30">
            <Mail className="h-5 w-5 text-teal-300" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Get in touch</h2>
        </div>
        <p className="mt-3 text-slate-300">Have a project in mind or want to collaborate? Send a message and I’ll respond soon.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-slate-200">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Jane Doe"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-slate-200">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="you@company.com"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-slate-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Tell me about your goals..."
            />
          </div>
          <div className="mt-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-white shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400">
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <div className="text-sm text-slate-300">{status}</div>
          </div>
        </form>
      </div>
    </section>
  );
}
