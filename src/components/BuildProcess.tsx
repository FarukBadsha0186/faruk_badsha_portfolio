import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const timelineSteps = [
  {
    id: 1,
    phase: 'Phase 01',
    title: 'Idea & Planning',
    icon: '💡',
    color: 'from-yellow-600 to-orange-700',
    borderColor: 'border-yellow-600/40',
    badgeColor: 'bg-yellow-900/40 text-yellow-300 border-yellow-700/40',
    duration: 'Day 1–2',
    aiRole: 'Claude helped break down requirements into structured tasks and suggested the optimal tech stack.',
    steps: [
      'Define project scope and core features',
      'Ask Claude to generate a full feature checklist',
      'Plan database schema with Claude\'s guidance',
      'Create folder structure and architecture blueprint',
    ],
    tools: ['Claude AI', 'Notion', 'Excalidraw'],
    output: 'Project blueprint, schema design, folder structure',
  },
  {
    id: 2,
    phase: 'Phase 02',
    title: 'Frontend Development',
    icon: '🖥️',
    color: 'from-blue-600 to-cyan-700',
    borderColor: 'border-blue-600/40',
    badgeColor: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
    duration: 'Day 3–7',
    aiRole: 'Claude generated boilerplate components, suggested Tailwind class combinations, and debugged UI logic.',
    steps: [
      'Scaffold React + TypeScript + Tailwind project with Vite',
      'Build reusable components with Claude\'s code suggestions',
      'Implement routing, state management, and API hooks',
      'Make fully responsive — mobile, tablet, desktop',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Claude AI'],
    output: 'Complete responsive frontend — all pages functional',
  },
  {
    id: 3,
    phase: 'Phase 03',
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-brand-600 to-green-700',
    borderColor: 'border-brand-600/40',
    badgeColor: 'bg-brand-900/40 text-brand-300 border-brand-700/40',
    duration: 'Day 8–12',
    aiRole: 'Claude wrote Express route handlers, middleware logic, JWT auth flows, and MongoDB schema models.',
    steps: [
      'Set up Node.js + Express + TypeScript server',
      'Build RESTful API routes with Claude\'s assistance',
      'Implement JWT authentication and role-based access',
      'Connect MongoDB Atlas / PostgreSQL with Mongoose',
    ],
    tools: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Claude AI'],
    output: 'Fully functional REST API with auth and database',
  },
  {
    id: 4,
    phase: 'Phase 04',
    title: 'Testing & QA',
    icon: '🔬',
    color: 'from-accent-600 to-purple-700',
    borderColor: 'border-accent-600/40',
    badgeColor: 'bg-accent-600/20 text-accent-300 border-accent-600/30',
    duration: 'Day 13–15',
    aiRole: 'Claude generated Postman test scripts, suggested edge cases, and helped write automation test scenarios.',
    steps: [
      'Write Postman collections for all API endpoints',
      'Run manual test cases — positive, negative, security',
      'Load test with JMeter for concurrent user scenarios',
      'Fix bugs, optimize queries, resolve edge cases',
    ],
    tools: ['Postman', 'JMeter', 'Selenium', 'Claude AI'],
    output: '120+ API tests passing, load tested up to 500 users',
  },
  {
    id: 5,
    phase: 'Phase 05',
    title: 'Deployment & Production',
    icon: '🚀',
    color: 'from-rose-600 to-pink-700',
    borderColor: 'border-rose-600/40',
    badgeColor: 'bg-rose-900/40 text-rose-300 border-rose-700/40',
    duration: 'Day 16–17',
    aiRole: 'Claude wrote the deployment config files, environment variable setup guides, and CI/CD pipeline steps.',
    steps: [
      'Deploy frontend to Vercel with environment configs',
      'Deploy backend to Render with production env vars',
      'Connect MongoDB Atlas + configure Cloudinary CDN',
      'Test full production flow end-to-end',
    ],
    tools: ['Vercel', 'Render', 'MongoDB Atlas', 'Cloudinary', 'Claude AI'],
    output: 'Live production app — frontend + backend + database',
  },
];

const aiTools = [
  {
    name: 'Claude AI',
    role: 'Primary AI Partner',
    icon: '🤖',
    uses: [
      'Architecture planning & code scaffolding',
      'Debugging complex logic and async issues',
      'Writing test cases and API collections',
      'Deployment configs and README generation',
    ],
    color: 'border-brand-500/50 bg-brand-900/20',
    badge: 'bg-brand-900/60 text-brand-300',
  },
];

interface StepDetail {
  phase: string;
  title: string;
  icon: string;
  duration: string;
  aiRole: string;
  steps: string[];
  tools: string[];
  output: string;
  color: string;
}

function StepModal({ step, onClose }: { step: StepDetail; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl`}>
              {step.icon}
            </div>
            <div>
              <p className="text-slate-500 text-xs">{step.phase}</p>
              <h3 className="font-bold text-white">{step.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-5">
          <div className="bg-brand-900/20 border border-brand-800/40 rounded-xl p-4">
            <p className="text-brand-400 text-xs font-semibold mb-2">🤖 Claude AI Role</p>
            <p className="text-slate-300 text-sm leading-relaxed">{step.aiRole}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold mb-3">PROCESS STEPS</p>
            <ul className="space-y-2">
              {step.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-brand-500 font-mono mt-0.5">{i + 1}.</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold mb-2">TOOLS USED</p>
            <div className="flex flex-wrap gap-2">
              {step.tools.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4">
            <p className="text-slate-500 text-xs font-semibold mb-1">✅ OUTPUT</p>
            <p className="text-white text-sm font-medium">{step.output}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuildProcess() {
  const [activeStep, setActiveStep] = useState<StepDetail | null>(null);

  return (
    <section id="build-process" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div
          className="section-divider mx-auto"
          style={{ background: 'linear-gradient(to right, #22c55e, #8b5cf6)' }}
        />
        <h2 className="section-heading">How I Build</h2>
        <p className="section-subheading">
          From idea to production — my full AI-assisted development workflow
        </p>
      </div>

      {/* AI Tool Highlight */}
      <div className="mb-12">
        {aiTools.map((tool) => (
          <div
            key={tool.name}
            className={`rounded-2xl border p-6 ${tool.color} flex flex-col sm:flex-row items-start sm:items-center gap-6`}
          >
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center text-4xl">
                {tool.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{tool.name}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${tool.badge}`}>
                  {tool.role}
                </span>
              </div>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-2">
              {tool.uses.map((use) => (
                <div key={use} className="flex items-center gap-2 text-slate-300 text-sm">
                  <span className="text-brand-500 flex-shrink-0">✓</span>
                  {use}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-600 via-brand-600 to-rose-600 opacity-30 hidden md:block" />

        <div className="space-y-5">
          {timelineSteps.map((step) => (
            <div key={step.id} className="relative flex gap-6 items-start">
              {/* Circle on line */}
              <div
                className={`hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} items-center justify-center text-xl flex-shrink-0 z-10 shadow-lg`}
              >
                {step.icon}
              </div>

              {/* Card */}
              <div
                className={`flex-1 card border ${step.borderColor} hover:border-opacity-80 cursor-pointer group`}
                onClick={() => setActiveStep(step)}
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Mobile icon */}
                  <div
                    className={`md:hidden w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-lg flex-shrink-0`}
                  >
                    {step.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg border ${step.badgeColor}`}>
                        {step.phase}
                      </span>
                      <span className="text-slate-600 text-xs">{step.duration}</span>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brand-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      {step.aiRole}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.tools.map((t) => (
                        <span key={t} className="badge text-xs">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500 group-hover:text-brand-400 transition-colors flex-shrink-0 mt-1">
                    <span className="text-xs hidden sm:block">Details</span>
                    <ChevronRight size={16} />
                  </div>
                </div>

                {/* Output bar */}
                <div className="mt-4 pt-4 border-t border-slate-700/40 flex items-center gap-2">
                  <span className="text-brand-500 text-xs">✅</span>
                  <span className="text-slate-500 text-xs font-semibold">OUTPUT:</span>
                  <span className="text-slate-300 text-xs">{step.output}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stat bar */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '17', label: 'Days Avg per Project', icon: '📅' },
          { value: '100%', label: 'AI-Assisted Workflow', icon: '🤖' },
          { value: '2', label: 'Live Productions', icon: '🚀' },
          { value: '5', label: 'Phase Process', icon: '⚙️' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-800/50 border border-slate-700/40 rounded-2xl p-4 text-center"
          >
            <p className="text-2xl mb-1">{stat.icon}</p>
            <p className="text-2xl font-extrabold text-gradient">{stat.value}</p>
            <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {activeStep && (
        <StepModal step={activeStep} onClose={() => setActiveStep(null)} />
      )}
    </section>
  );
}
