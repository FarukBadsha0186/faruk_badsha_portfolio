import { caseBugs } from '../data/portfolioData';

const severityColors: Record<string, string> = {
  Critical: 'bg-red-900/40 text-red-300 border-red-700/40',
  High: 'bg-orange-900/40 text-orange-300 border-orange-700/40',
  Medium: 'bg-yellow-900/40 text-yellow-300 border-yellow-700/40',
  Low: 'bg-brand-900/40 text-brand-300 border-brand-700/40',
};

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)' }} />
        <h2 className="section-heading">How I Think</h2>
        <p className="section-subheading">QA + Developer মাইন্ডসেট – একটি কাল্পনিক কেস স্টাডি</p>
      </div>

      <div className="dark-card border border-slate-700/50 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900/40 to-accent-600/20 px-6 py-5 border-b border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-brand-500" />
            <span className="font-mono text-slate-500 text-xs ml-2">newshub-qa-report.md</span>
          </div>
          <h3 className="text-white font-bold text-xl">NewsHub QA Analysis</h3>
          <p className="text-slate-400 text-sm mt-1">
            "নিউজ পোর্টাল প্রজেক্টে যদি QA হতাম, তাহলে ডেভেলপমেন্টের <span className="text-brand-400 font-semibold">আগেই</span> পেতাম:"
          </p>
        </div>

        {/* Bugs */}
        <div className="p-6 space-y-4">
          {caseBugs.map((bug, index) => (
            <div key={bug.id} className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 hover:border-slate-600/60 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center text-xl flex-shrink-0">
                  {bug.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-slate-500 text-xs">BUG-{String(index + 1).padStart(3, '0')}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg border ${severityColors[bug.severity]}`}>
                      {bug.severity}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-lg bg-slate-700/60 text-slate-400 border border-slate-600/40">
                      {bug.type}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-lg bg-blue-900/30 text-blue-400 border border-blue-700/30 ml-auto">
                      🔧 {bug.method}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{bug.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{bug.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer insight */}
        <div className="px-6 py-5 bg-brand-900/20 border-t border-brand-800/40">
          <p className="text-brand-300 text-sm">
            💡 <span className="font-semibold">Insight:</span> একজন Developer হওয়ার কারণে আমি জানি কোথায় বাগ লুকিয়ে থাকে — তাই QA হিসেবে আমি সেই পয়েন্টগুলো আগে টেস্ট করি।
          </p>
        </div>
      </div>
    </section>
  );
}
