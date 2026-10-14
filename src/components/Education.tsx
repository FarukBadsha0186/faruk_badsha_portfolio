const educationData = [
  {
    id: 1,
    degree: 'B.Sc. in CSE',
    institution: 'BGC Trust University',
    year: '2022',
    icon: '🎓',
    color: 'from-brand-600 to-green-700',
    borderColor: 'border-brand-600/40',
    badgeColor: 'bg-brand-900/40 text-brand-300 border-brand-700/40',
  },
  {
    id: 2,
    degree: 'H.S.C',
    institution: 'Kulgaon City Corporation College',
    year: '2017',
    icon: '📚',
    color: 'from-blue-600 to-cyan-700',
    borderColor: 'border-blue-600/40',
    badgeColor: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
  },
  {
    id: 3,
    degree: 'S.S.C',
    institution: 'Sun Rising High School',
    year: '2014',
    icon: '🏫',
    color: 'from-violet-600 to-purple-700',
    borderColor: 'border-violet-600/40',
    badgeColor: 'bg-violet-900/40 text-violet-300 border-violet-700/40',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading">My academic background & qualifications</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-600 via-blue-600 to-violet-600 opacity-30 hidden md:block" />

        <div className="space-y-5">
          {educationData.map((edu) => (
            <div key={edu.id} className="relative flex gap-6 items-start">
              {/* Circle icon on line */}
              <div
                className={`hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} items-center justify-center text-xl flex-shrink-0 z-10 shadow-lg`}
              >
                {edu.icon}
              </div>

              {/* Card */}
              <div className={`flex-1 card border ${edu.borderColor} hover:border-opacity-80`}>
                <div className="flex items-start justify-between gap-4">
                  {/* Mobile icon */}
                  <div
                    className={`md:hidden w-10 h-10 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-lg flex-shrink-0`}
                  >
                    {edu.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg border ${edu.badgeColor}`}>
                        {edu.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}