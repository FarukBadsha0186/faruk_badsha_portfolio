import {  Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            
            <span className="font-mono text-sm">Faruk Badsha </span>
          </div>

          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {currentYear} Faruk Badsha · Built with ...
            <Heart size={12} className="text-red-500 fill-red-500" />
            using React + TypeScript + Tailwind
          </p>

          <div className="flex items-center gap-4">
            {['#hero', '#skills', '#projects', '#qa', '#contact'].map((href) => (
              <button
                key={href}
                onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-600 hover:text-slate-300 text-xs transition-colors capitalize"
              >
                {href.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
