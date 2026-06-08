

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">Who I am & what I bring to the table</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-center">
        
        <div className="md:col-span-2 flex justify-center">
          <div className="relative">
            <div className="w-90 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-brand-500/20 ring-2 ring-brand-500/30">
  <img 
    src="/public/faruk_badsha.png"
    alt="Faruk Badsha"
    className="w-full h-full object-cover"
  />
</div>
            <div className="absolute -bottom-3 -right-3 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2">
              <span className="text-brand-400 font-mono text-sm font-bold">6 mo exp</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-3 space-y-5">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Faruk Badsha</h3>
            <p className="text-brand-400 font-mono text-sm">MERN Stack Developer & SQA Engineer</p>
            <p className="text-slate-500 text-sm flex items-center gap-1.5 mt-1">
              📍 Dhaka & Chittagong, Bangladesh
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed">
            I'm a Full Stack MERN Developer and SQA Engineer with{' '}
            <span className="text-brand-400 font-semibold">6 months of hands-on experience</span>,
            including building production-level projects using Claude AI as a development
            accelerator. I write clean, testable code — and I know how to break it before users do.
          </p>

          <p className="text-slate-400 leading-relaxed text-sm">
            I specialize in building full-stack web applications with React, Node.js, and
            MongoDB, while applying QA practices — from Selenium automation to JMeter load
            testing — to ensure every product ships with confidence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { value: '6+', label: 'Months Experience' },
              { value: '2', label: 'Live Productions' },
              { value: '120+', label: 'API Tests Written' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-gradient">{stat.value}</p>
                <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['AI-Assisted Development', 'MERN Stack', 'Test Automation', 'Open to Work'].map((tag) => (
              <span key={tag} className="badge-green">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
