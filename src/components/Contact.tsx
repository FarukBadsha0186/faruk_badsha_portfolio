

import { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Send, Github, Linkedin, Download, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Thanks for reaching out! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Something went wrong. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">Let's Connect</h2>
        <p className="section-subheading">Open to new opportunities, collaborations, and freelance projects</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form */}
        <div className="md:col-span-3 card">
          <h3 className="font-bold text-white text-lg mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-400 text-sm mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-field resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="md:col-span-2 space-y-5">
        

          <div className="md:col-span-2">
  <div className="card h-full flex flex-col">
    <h3 className="font-bold text-white text-lg mb-6">Get in Touch</h3>

    {/* Email */}
    <a
      href="mailto:farukbadsha02@gmail.com"
      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/40 hover:border-brand-500/50 transition-all duration-200 group mb-4"
    >
      <div className="w-9 h-9 rounded-lg bg-slate-700/60 flex items-center justify-center group-hover:bg-brand-900/60 transition-colors">
        <Mail size={16} className="text-slate-400 group-hover:text-brand-400 transition-colors" />
      </div>
      <div className="min-w-0">
        <p className="text-white text-sm font-medium">Email</p>
        <p className="text-slate-500 text-xs truncate">farukbadsha02@gmail.com</p>
      </div>
    </a>

    {/* Divider */}
    <div className="border-t border-slate-700/40 my-2" />

    {/* Social Links */}
    <div className="space-y-3 mt-2">
      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
        Social Links
      </p>
      {[
        {
          icon: Github,
          label: 'GitHub',
          href: 'https://github.com/FarukBadsha0186',
          sub: '@FarukBadsha0186',
        },
        {
          icon: Linkedin,
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/faruk-badsha-bb7401211',
          sub: 'faruk-badsha-bb7401211',
        },
      ].map(({ icon: Icon, label, href, sub }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/40 hover:border-brand-500/50 transition-all duration-200 group"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-700/60 flex items-center justify-center group-hover:bg-brand-900/60 transition-colors">
            <Icon size={16} className="text-slate-400 group-hover:text-brand-400 transition-colors" />
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-medium">{label}</p>
            <p className="text-slate-500 text-xs truncate">{sub}</p>
          </div>
        </a>
      ))}
    </div>

    {/* Divider */}
    <div className="border-t border-slate-700/40 my-4" />

    {/* Resume */}
    <div>
      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
        Resume
      </p>
      <a
        href="/resume.pdf"
        download
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        <Download size={16} />
        Download Resume
      </a>
    </div>

    {/* Open to Work */}
    <div className="mt-5 pt-5 border-t border-slate-700/40">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
        <span className="text-brand-300 font-semibold text-sm">Open to Work</span>
      </div>
      <p className="text-slate-400 text-xs">
        Available for remote roles and on-site positions in Dhaka & Chittagong, Bangladesh.
      </p>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}