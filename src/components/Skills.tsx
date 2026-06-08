// const devSkills = [
//   { name: 'React', icon: '⚛️' },
//   { name: 'Node.js', icon: '🟢' },
//   { name: 'Express', icon: '🚂' },
//   { name: 'MongoDB', icon: '🍃' },
//   { name: 'JavaScript', icon: '🟡' },
//   { name: 'TypeScript', icon: '🔷' },
//   { name: 'Tailwind CSS', icon: '💨' },
//   { name: 'REST API', icon: '🔗' },
//   { name: 'PostgreSQL', icon: '🐘' },
//   { name: 'Git & GitHub', icon: '🐙' },
// ];

// const qaSkills = [
//   { name: 'Selenium', icon: '🤖' },
//   { name: 'Postman', icon: '📬' },
//   { name: 'Jira', icon: '📋' },
//   { name: 'Gemini AI', icon: '✨' },
//   { name: 'JMeter', icon: '⚡' },
//   { name: 'Load Testing', icon: '📊' },
//   { name: 'Manual Testing', icon: '🔍' },
//   { name: 'Test Automation', icon: '⚙️' },
//   { name: 'TestNG', icon: '🧪' },
//   { name: 'Bug Reporting', icon: '🐛' },
// ];

// interface SkillPillProps {
//   name: string;
//   icon: string;
//   variant: 'dev' | 'qa';
// }

// function SkillPill({ name, icon, variant }: SkillPillProps) {
//   return (
//     <div
//       className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default ${
//         variant === 'dev'
//           ? 'bg-brand-900/30 border-brand-700/40 hover:border-brand-500/60 hover:shadow-brand-500/10'
//           : 'bg-accent-600/10 border-accent-600/30 hover:border-accent-400/60 hover:shadow-accent-500/10'
//       }`}
//     >
//       <span className="text-base">{icon}</span>
//       <span
//         className={`text-sm font-medium ${
//           variant === 'dev' ? 'text-brand-300' : 'text-accent-300'
//         }`}
//       >
//         {name}
//       </span>
//     </div>
//   );
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
//       <div className="text-center mb-14">
//         <div className="section-divider mx-auto" />
//         <h2 className="section-heading">Tech Stack</h2>
        
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Dev Skills */}
//         <div className="card">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-xl bg-brand-900/60 flex items-center justify-center">
//               <span className="text-xl">💻</span>
//             </div>
//             <div>
//               <h3 className="font-bold text-white text-lg">Development</h3>
//               <p className="text-slate-500 text-xs">Full Stack Skills</p>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {devSkills.map((skill) => (
//               <SkillPill key={skill.name} name={skill.name} icon={skill.icon} variant="dev" />
//             ))}
//           </div>
//         </div>

//         {/* QA Skills */}
//         <div className="card">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-xl bg-accent-600/20 flex items-center justify-center">
//               <span className="text-xl">🔬</span>
//             </div>
//             <div>
//               <h3 className="font-bold text-white text-lg">QA & Testing</h3>
//               <p className="text-slate-500 text-xs">Quality Assurance Tools</p>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {qaSkills.map((skill) => (
//               <SkillPill key={skill.name} name={skill.name} icon={skill.icon} variant="qa" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    variant: 'dev' as const,
    skills: [
      { name: 'HTML5', icon: '🧱' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'JavaScript', icon: '🟡' },
      { name: 'TypeScript', icon: '🔷' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    variant: 'dev' as const,
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'RESTful APIs', icon: '🔗' },
      { name: 'JWT Auth', icon: '🔐' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    variant: 'db' as const,
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MongoDB Atlas', icon: '☁️' },
      { name: 'SQL', icon: '📊' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    variant: 'tools' as const,
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Postman', icon: '📬' },
      { name: 'Render', icon: '🚀' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Netlify', icon: '🌐' },
      { name: 'Cloudinary', icon: '🖼️' },
    ],
  },
  {
    category: 'Programming',
    icon: '💻',
    variant: 'dev' as const,
    skills: [
      { name: 'JavaScript', icon: '🟡' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Java', icon: '☕' },
      { name: 'C', icon: '©️' },
      { name: 'C++', icon: '➕' },
    ],
  },
  {
    category: 'Testing',
    icon: '🔬',
    variant: 'qa' as const,
    skills: [
      { name: 'Unit Testing', icon: '🧪' },
      { name: 'Integration Testing', icon: '🔗' },
      { name: 'Manual Testing', icon: '🔍' },
      { name: 'Automation Testing', icon: '🤖' },
      { name: 'Selenium', icon: '⚙️' },
      { name: 'JMeter', icon: '⚡' },
    ],
  },
];

type Variant = 'dev' | 'qa' | 'db' | 'tools';

const pillStyles: Record<Variant, string> = {
  dev: 'bg-brand-900/30 border-brand-700/40 hover:border-brand-500/60 hover:shadow-brand-500/10',
  qa: 'bg-accent-600/10 border-accent-600/30 hover:border-accent-400/60 hover:shadow-accent-500/10',
  db: 'bg-blue-900/20 border-blue-700/40 hover:border-blue-500/60 hover:shadow-blue-500/10',
  tools: 'bg-orange-900/20 border-orange-700/40 hover:border-orange-500/60 hover:shadow-orange-500/10',
};

const textStyles: Record<Variant, string> = {
  dev: 'text-brand-300',
  qa: 'text-accent-300',
  db: 'text-blue-300',
  tools: 'text-orange-300',
};

const headerStyles: Record<Variant, string> = {
  dev: 'bg-brand-900/60',
  qa: 'bg-accent-600/20',
  db: 'bg-blue-900/40',
  tools: 'bg-orange-900/30',
};

interface SkillPillProps {
  name: string;
  icon: string;
  variant: Variant;
}

function SkillPill({ name, icon, variant }: SkillPillProps) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default ${pillStyles[variant]}`}
    >
      <span className="text-base">{icon}</span>
      <span className={`text-sm font-medium ${textStyles[variant]}`}>{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">Tech Stack</h2>
        <p className="section-subheading">Technologies & tools I work with every day</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="card">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${headerStyles[group.variant]}`}>
                <span className="text-xl">{group.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{group.category}</h3>
                <p className="text-slate-500 text-xs">{group.skills.length} technologies</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillPill
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  variant={group.variant}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
