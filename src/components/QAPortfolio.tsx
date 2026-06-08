import { useState } from 'react';
import { Github, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface QACard {
  id: number;
  icon: string;
  title: string;
  description: string;
  badge: string;
  github?: string;
  hasModal: boolean;
  modalType: 'bugReport' | 'testCase' | 'framework' | 'generic';
}

const qaCards: QACard[] = [
  {
    id: 1,
    icon: '⚙️',
    title: 'Selenium Automation – ParaBank',
    description: 'Developed a robust automated testing framework using Java, TestNG, and Selenium WebDriver to validate key functionalities of the ParaBank demo banking application. Applied the Page Object Model (POM) design pattern for scalable and maintainable test scripts.',
    badge: 'Java + TestNG',
    github: 'https://github.com/FarukBadsha0186/Parabank-BankingAutomation-TestNG/tree/main',
    hasModal: true,
    modalType: 'framework',
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Performance Testing – Random User API',
    description: 'Load and stress tests on the Random User API to determine performance capabilities and identify potential bottlenecks. Includes pass/fail thresholds and capacity value analysis using JMeter.',
    badge: 'JMeter',
    github: 'https://github.com/FarukBadsha0186/Perfomance_Testing_with_pass_and_bottleneck_point_capacity_value',
    hasModal: true,
    modalType: 'generic',
  },
  {
    id: 3,
    icon: '📬',
    title: 'API Testing – Postman Integration',
    description: 'API testing covering functionality, performance, reliability, and security of Application Programming Interfaces. Built with Postman collections for integration testing with automated assertions and environment variables.',
    badge: 'Postman + Newman',
    github: 'https://github.com/FarukBadsha0186/Integration_Testing_using_Postman',
    hasModal: true,
    modalType: 'generic',
  },
 
  {
    id: 4,
    icon: '🏗️',
    title: 'Automation Framework – POM',
    description: 'Hybrid Framework built with Page Object Model + Data-Driven approach. Maven build, Log4j logging, Extent Report generation. Designed for scalability and maintainability.',
    badge: 'Hybrid POM',
    github: 'https://github.com/FarukBadsha0186/Parabank-BankingAutomation-TestNG/tree/main',
    hasModal: true,
    modalType: 'framework',
  },
];

function BugReportModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h3 className="font-bold text-white text-lg">🐛 Sample Bug Report</h3>
            <p className="text-slate-500 text-xs">Jira-style Bug Report Template</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/60 rounded-xl p-4">
              <p className="text-slate-500 text-xs mb-1">Bug ID</p>
              <p className="text-white font-mono font-bold">BUG-0042</p>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-4">
              <p className="text-slate-500 text-xs mb-1">Severity</p>
              <span className="text-xs font-bold px-2.5 py-1 bg-red-900/60 text-red-300 border border-red-700/50 rounded-lg">CRITICAL</span>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-4">
              <p className="text-slate-500 text-xs mb-1">Priority</p>
              <span className="text-xs font-bold px-2.5 py-1 bg-orange-900/60 text-orange-300 border border-orange-700/50 rounded-lg">HIGH</span>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-4">
              <p className="text-slate-500 text-xs mb-1">Status</p>
              <span className="text-xs font-bold px-2.5 py-1 bg-yellow-900/60 text-yellow-300 border border-yellow-700/50 rounded-lg">OPEN</span>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-2">Title</p>
            <p className="text-white font-semibold">Login button unresponsive on iOS Safari 16.x after password autofill</p>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-2">Environment</p>
            <div className="font-mono text-slate-300 space-y-1 text-xs">
              <p>🖥️ OS: iOS 16.4.1</p>
              <p>🌐 Browser: Safari 16.4</p>
              <p>📱 Device: iPhone 13</p>
              <p>🔗 URL: https://staging.eshop.com/login</p>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-2">Steps to Reproduce</p>
            <ol className="text-slate-300 space-y-1.5 list-decimal list-inside text-xs">
              <li>Open staging.eshop.com/login in iOS Safari</li>
              <li>Click on Email field — Autofill suggestion appears</li>
              <li>Select credentials from Autofill</li>
              <li>Tap the Login button</li>
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-900/20 border border-red-800/40 rounded-xl p-4">
              <p className="text-red-400 text-xs font-semibold mb-2">❌ Actual Result</p>
              <p className="text-slate-300 text-xs">Login button tap produces no response. Page does not reload, no API call is made.</p>
            </div>
            <div className="bg-brand-900/20 border border-brand-800/40 rounded-xl p-4">
              <p className="text-brand-400 text-xs font-semibold mb-2">✅ Expected Result</p>
              <p className="text-slate-300 text-xs">Authentication API call is made and on success, user is redirected to the dashboard.</p>
            </div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4">
            <p className="text-slate-500 text-xs mb-2">Root Cause Analysis</p>
            <p className="text-slate-300 text-xs">iOS Autofill changes form state outside of React. The onSubmit handler fails form validity check because React state was not updated. Fix: use <span className="text-brand-400 font-mono">onInput</span> instead of <span className="text-brand-400 font-mono">onChange</span> event handler.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestCaseModal({ onClose }: { onClose: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const testCases = [
    {
      id: 'TC-001', title: 'Valid Credentials Login', type: 'Positive',
      steps: ['Enter valid email & password', 'Click Login button'],
      expected: 'Redirected to Dashboard, JWT token is set',
      status: '✅ Pass',
    },
    {
      id: 'TC-002', title: 'Invalid Password Login', type: 'Negative',
      steps: ['Enter valid email, invalid password', 'Click Login'],
      expected: '"Invalid credentials" error message shown, no redirect',
      status: '✅ Pass',
    },
    {
      id: 'TC-003', title: 'Empty Fields Submission', type: 'Negative',
      steps: ['Leave Email and Password fields empty', 'Click Login button'],
      expected: 'Validation error shown, no API call made',
      status: '✅ Pass',
    },
   
    {
      id: 'TC-004', title: 'Brute Force Protection', type: 'Security',
      steps: ['Enter wrong password 5 times', 'Attempt login a 6th time'],
      expected: 'Account is locked, "Too many attempts" message shown',
      status: '✅ Pass',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h3 className="font-bold text-white text-lg">📋 Manual Test Cases</h3>
            <p className="text-slate-500 text-xs">E-Commerce Login Flow – 5 Test Cases</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-3">
          {testCases.map((tc, i) => (
            <div key={tc.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500">{tc.id}</span>
                  <span className="text-sm font-semibold text-white">{tc.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-lg border font-medium ${
                    tc.type === 'Positive' ? 'bg-brand-900/40 text-brand-300 border-brand-700/40' :
                    tc.type === 'Negative' ? 'bg-red-900/40 text-red-300 border-red-700/40' :
                    'bg-accent-600/20 text-accent-300 border-accent-600/30'
                  }`}>{tc.type}</span>
                </div>
                {openIndex === i ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 space-y-3 border-t border-slate-700/50">
                  <div className="mt-3">
                    <p className="text-xs text-slate-500 mb-2 font-semibold">STEPS:</p>
                    <ol className="space-y-1">
                      {tc.steps.map((step, j) => (
                        <li key={j} className="text-slate-300 text-xs flex gap-2">
                          <span className="text-brand-500 font-mono">{j + 1}.</span> {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-3">
                    <p className="text-xs text-slate-500 mb-1 font-semibold">EXPECTED RESULT:</p>
                    <p className="text-slate-300 text-xs">{tc.expected}</p>
                  </div>
                  <p className="text-xs font-semibold">{tc.status}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FrameworkModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h3 className="font-bold text-white text-lg">🏗️ Automation Framework</h3>
            <p className="text-slate-500 text-xs">ParaBank – Hybrid POM Framework Structure</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-slate-950 rounded-xl p-5 font-mono text-xs text-slate-300 leading-relaxed border border-slate-800">
            <p className="text-brand-400 font-bold mb-3">📁 Parabank-BankingAutomation-TestNG/</p>
            <div className="space-y-1 pl-4">
              <p className="text-accent-400">├── src/</p>
              <div className="pl-4 space-y-1">
                <p className="text-slate-300">├── main/java/</p>
                <div className="pl-4 space-y-1">
                  <p className="text-blue-400">├── pages/         <span className="text-slate-600"># Page Object Classes</span></p>
                  <p className="text-blue-400">├── utils/         <span className="text-slate-600"># Helper Methods</span></p>
                  <p className="text-blue-400">├── base/          <span className="text-slate-600"># BaseTest, BaseDriver</span></p>
                  <p className="text-blue-400">└── config/        <span className="text-slate-600"># ConfigReader</span></p>
                </div>
                <p className="text-slate-300">└── test/java/</p>
                <div className="pl-4 space-y-1">
                  <p className="text-brand-400">├── tests/         <span className="text-slate-600"># Test Classes</span></p>
                  <p className="text-brand-400">└── data/          <span className="text-slate-600"># Test Data Excel/JSON</span></p>
                </div>
              </div>
              <p className="text-yellow-400">├── resources/</p>
              <div className="pl-4 space-y-1">
                <p className="text-slate-300">├── config.properties</p>
                <p className="text-slate-300">├── testng.xml</p>
                <p className="text-slate-300">└── log4j2.xml</p>
              </div>
              <p className="text-slate-300">├── pom.xml            <span className="text-slate-600"># Maven config</span></p>
              <p className="text-slate-300">└── README.md</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Design Pattern', value: 'Page Object Model' },
              { label: 'Test Runner', value: 'TestNG + Maven' },
              { label: 'Reports', value: 'Extent Reports' },
            ].map((item) => (
              <div key={item.label} className="bg-slate-800/60 rounded-xl p-3 text-center">
                <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                <p className="text-white font-semibold text-xs">{item.value}</p>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/FarukBadsha0186/Parabank-BankingAutomation-TestNG/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 btn-primary w-full flex items-center justify-center gap-2"
          >
            <Github size={16} />
            View on GitHub
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

function GenericModal({ card, onClose }: { card: QACard; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <h3 className="font-bold text-white text-lg">{card.icon} {card.title}</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-slate-300 leading-relaxed text-sm">{card.description}</p>
          <div className="flex items-center gap-2">
            <span className="badge-purple">{card.badge}</span>
          </div>
          {card.github && (
            <a
              href={card.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 w-full"
            >
              <Github size={16} />
              View on GitHub
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function QAPortfolio() {
  const [activeModal, setActiveModal] = useState<QACard | null>(null);

  return (
    <section id="qa" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" style={{ background: 'linear-gradient(to right, #8b5cf6, #a78bfa)' }} />
        <h2 className="section-heading">QA Arsenal</h2>
        <p className="section-subheading">Real Testing Projects – My QA Portfolio</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {qaCards.map((card) => (
          <div key={card.id} className="card group flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-700/60 flex items-center justify-center text-2xl">
                {card.icon}
              </div>
              <span className="badge-purple">{card.badge}</span>
            </div>
            <h3 className="font-bold text-white mb-2">{card.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{card.description}</p>
            <div className="flex gap-2 mt-auto">
              {card.github && (
                <a
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  title="View on GitHub"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              <button
                onClick={() => setActiveModal(card)}
                className="btn-primary text-sm py-2 px-4 ml-auto"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeModal && activeModal.modalType === 'bugReport' && (
        <BugReportModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal && activeModal.modalType === 'testCase' && (
        <TestCaseModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal && activeModal.modalType === 'framework' && (
        <FrameworkModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal && activeModal.modalType === 'generic' && (
        <GenericModal card={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  );
}
