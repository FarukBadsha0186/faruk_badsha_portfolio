import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl animate-pulse-slow animate-delay-300" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-brand-900/40 border border-brand-700/40 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
          <span className="text-brand-300 text-sm font-medium">Available for Remote & Office Jobs · Bangladesh</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-up">
          <span className="block text-white">MERN Stack</span>
          <span className="block text-gradient">Developer</span>
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            & SQA Engineer
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-400 text-base sm:text-lg mb-4 font-mono animate-fade-up animate-delay-100">
          JavaScript <span className="text-brand-500">•</span> TypeScript <span className="text-brand-500">•</span> Full Stack <span className="text-brand-500">•</span> Quality Focused
        </p>

        {/* Bio */}
        <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
        "I build apps that are hard to break ,{' '}
          <span className="text-brand-400 font-semibold">because I know how to break them first."</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animate-delay-300">
          <button onClick={scrollToProjects} className="btn-primary w-full sm:w-auto">
            View Projects →
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-up animate-delay-400">
          <a
            href="https://github.com/FarukBadsha0186"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="www.linkedin.com/in/faruk-badsha-bb7401211"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
         
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors mx-auto animate-float"
        >
          <span className="text-xs font-mono">scroll down</span>
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
