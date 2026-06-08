import { ExternalLink, Github, ShieldCheck, Users } from 'lucide-react';

const projects = [
  // {
  //   id: 1,
  //   title: 'NewsHub',
  //   subtitle: 'Online News Portal',
  //   description: 'A production-ready full-stack news portal. Built and deployed the complete frontend and backend independently — from database design to live deployment on Render.',
  //   features: ['Category-based news feed', 'Full-text search', 'Comment system', 'Admin panel', 'Breaking news banner'],
  //   techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
  //   liveLinks: [
  //     { label: 'Live Site', url: 'https://news-portal-etom.onrender.com/', type: 'live' },
  //   ],
  //   github: 'https://github.com/FarukBadsha0186/news_portal_with_admin',
  //   emoji: '📰',
  //   color: 'from-blue-600 to-cyan-800',
  // },
  {
    id: 1,
    title: 'NewsHub',
    subtitle: 'Online News Portal',
    description: 'A production-ready full-stack news portal. Built and deployed the complete frontend and backend independently — from database design to live deployment on Render.',
    features: ['Category-based news feed', 'Full-text search', 'Comment system', 'Admin panel', 'Breaking news banner'],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
    liveLinks: [
      { label: 'Live Site', url: 'https://news-portal-etom.onrender.com/', type: 'live' },
    ],
    github: 'https://github.com/FarukBadsha0186/news_portal_with_admin',
    websiteImage: '<img src="/public/client_front.png" alt="NewsHub Website Preview" width="100%" style="border-radius: 12px;" />',
    color: 'from-blue-600 to-cyan-800',
},
  {
    id: 2,
    title: 'ShopZone',
    subtitle: 'Full-Stack E-Commerce Platform',
    description: 'Complete e-commerce platform built solo — user storefront, admin dashboard, product management, order tracking, and SSLCommerz payment gateway integration.',
    features: ['User & Admin panel', 'Product management', 'Cart & checkout', 'Order tracking', 'SSLCommerz payment'],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'SSLCommerz'],
    liveLinks: [
      { label: 'Client Panel', url: 'https://client-panel.onrender.com/', type: 'client' },
      { label: 'Admin Panel', url: 'https://admin-panel-18zu.onrender.com/login', type: 'admin' },
    ],
    github: 'https://github.com/FarukBadsha0186/ecommerce_frontend_-_backend',
    emoji: '🛒',
    color: 'from-green-600 to-green-900',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">MERN Projects</h2>
        <p className="section-subheading">Full-stack applications I built and deployed end-to-end</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="card group flex flex-col">

            <div className={`h-40 rounded-xl mb-5 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <span className="text-6xl relative z-10">{project.emoji}</span>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-xs font-medium">Live</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="font-bold text-white text-xl">{project.title}</h3>
              <p className="text-brand-400 text-sm font-medium mb-3">{project.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              <ul className="space-y-1 mb-5">
                {project.features.map((f) => (
                  <li key={f} className="text-slate-400 text-xs flex items-center gap-2">
                    <span className="text-brand-500">✓</span> {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <div className="flex gap-2">
                  {project.liveLinks.map((link) => {
                    const Icon =
                      link.type === 'admin'
                        ? ShieldCheck
                        : link.type === 'client'
                        ? Users
                        : ExternalLink;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm py-2.5"
                      >
                        <Icon size={13} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center gap-2 text-sm py-2.5"
                >
                  <Github size={14} />
                  View on GitHub
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
