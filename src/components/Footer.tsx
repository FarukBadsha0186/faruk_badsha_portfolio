import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left — Name + Role */}
          <div className="text-center md:text-left">
            <p className="font-mono text-brand-400 font-bold text-sm">
              Faruk Badsha
            </p>
            <p className="text-slate-500 text-xs mt-1">
              MERN Stack Developer
            </p>
          </div>

          {/* Center — Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/FarukBadsha0186"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/faruk-badsha-bb7401211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:farukbadsha02@gmail.com"
              className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-brand-500/50 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Right — Copyright + Location */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs">
              © {currentYear} Faruk Badsha
            </p>
            <p className="text-slate-600 text-xs mt-1">
              Dhaka & Chittagong, Bangladesh
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}