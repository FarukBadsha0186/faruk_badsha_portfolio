

import { useState } from 'react';
import { ExternalLink, Github, ShieldCheck, Users, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Tour Guide Platform',
    subtitle: 'Tour Booking Marketplace',
    description: 'Tour booking marketplace with 3-role system, 4-layered approval workflow, and bKash payment integration.',
    fullDescription: 'Tour Guide Platform is a marketplace that connects tourists with verified local guides across Bangladesh. The platform implements a sophisticated 4-layered approval workflow — guide profile verification, account approval, package approval, and booking confirmation — ensuring quality control at every stage. Built with Next.js 16 App Router and modern tooling (TanStack Query, Zod, shadcn/ui), it features a complete booking lifecycle from discovery to review.',
    highlight: '4-layered approval workflow (Profile → Account → Package → Booking) with bKash auto-confirmation',
    features: [
      'Three roles (Tourist, Guide, Admin) with RBAC',
      '4-layered approval chain',
      'Guide availability slots with date-wise booking',
      'bKash payment with auto-confirmation',
      'Google OAuth 2.0 + Email OTP authentication',
    ],
    techStack: ['Next.js 16', 'TypeScript', 'bKash Payment', 'JWT + Google OAuth', 'TanStack Query', 'Tailwind CSS 4', 'Shadcn/ui', 'Vercel'],
    liveLinks: [
      { label: 'Frontend', url: 'https://tour-guide-platform-frontend.vercel.app', type: 'live' },
      { label: 'Backend', url: 'https://tour-guide-platform-backend.vercel.app', type: 'live' },
    ],
    github: 'https://github.com/FarukBadsha0186/tour-guide-platform-frontend.git',
    websiteImage: '<img src="/tourguide.png" alt="Tour Guide Platform Preview" style="width:100%; height:100%; object-fit:cover; border-radius:12px;" />',
    color: 'from-violet-600 to-purple-900',
    challenges: [
      'Implementing 4-layered approval workflow without race conditions — solved with atomic DB operations and status state machines',
      'Managing date-wise availability slots with proper timezone handling for tourists booking from different regions',
      'bKash payment integration with sandbox limitations and webhook confirmation flow',
      'OAuth + JWT session management across role-based protected routes with Next.js middleware',
    ],
    futureImprovements: [
      'Add real-time chat between tourist and guide for pre-booking inquiries',
      'Integrate Google Maps for location-based guide discovery',
      'Add a review and rating system with photo uploads',
      'Implement multi-currency support for international tourists',
    ],
  },
  {
    id: 2,
    title: 'FixItNow',
    subtitle: 'Home Service Platform',
    description: 'Full-stack home services marketplace connecting customers with verified technicians — booking, scheduling, and secure Stripe payments.',
    fullDescription: 'FixItNow is a comprehensive home service marketplace that solves the problem of finding trusted technicians for household repairs and maintenance. The platform features three distinct user roles — customers who book services, technicians who provide them, and admins who oversee the entire ecosystem. Built with Next.js 14 App Router and React Query for optimal performance.',
    highlight: '3-role system with shared component library and Stripe webhook-based booking confirmation',
    features: [
      'Three user roles (Customer, Technician, Admin)',
      'Advanced search & filter (category, location, rating, price)',
      'Interactive booking with date/time pickers',
      'Stripe payment integration',
      'Role-based dashboards with real-time updates',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Stripe', 'NextAuth.js', 'React Query', 'Tailwind CSS', 'Shadcn/ui', 'Vercel'],
    liveLinks: [
      { label: 'Frontend', url: 'https://fix-it-now-frontend-omega.vercel.app/', type: 'live' },
      { label: 'Backend', url: 'https://b7-a4-fix-it-now.vercel.app/', type: 'live' },
    ],
    github: 'https://github.com/FarukBadsha0186/FixItNow_Frontend.git',
    websiteImage: '<img src="/fixitnow.png" alt="FixItNow Website Preview" style="width:100%; height:100%; object-fit:cover; border-radius:12px;" />',
    color: 'from-orange-600 to-red-800',
    challenges: [
      'Managing 3 different user roles with separate dashboards without duplicating code — solved with a shared component library',
      'Implementing Stripe payment flow with proper webhook handling for booking confirmation and refunds',
      'Real-time booking updates across customer and technician views with careful React Query state management',
      'Complex search & filter logic (category, location, price, rating) with optimized MongoDB indexes',
    ],
    futureImprovements: [
      'Add real-time chat between customer and technician',
      'Implement push notifications for booking status updates',
      'Add multi-language support (Bengali + English)',
      'Build a mobile app version with React Native',
    ],
  },
  {
    id: 3,
    title: 'NewsHub',
    subtitle: 'Online News Portal',
    description: 'Production-ready full-stack news portal with category feeds, full-text search, comment system, and admin panel.',
    fullDescription: 'NewsHub is a full-featured online news portal that delivers categorized news content with an admin management system. Built entirely with the MERN stack, it handles article publishing, category-based feeds, full-text search, and user engagement through comments. The platform includes a comprehensive admin panel where editors can publish breaking news, manage articles, and moderate comments.',
    highlight: 'Full-text search with MongoDB text indexes across thousands of documents with real-time breaking news banner',
    features: [
      'Category-based news feed',
      'Full-text search',
      'Comment system',
      'Admin panel',
      'Breaking news banner',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    liveLinks: [
      { label: 'Live Site', url: 'https://news-portal-etom.onrender.com/', type: 'live' },
    ],
    github: 'https://github.com/FarukBadsha0186/news_portal_with_admin',
    websiteImage: '<img src="/newshub.png" alt="NewsHub Website Preview" style="width:100%; height:100%; object-fit:cover; border-radius:12px;" />',
    color: 'from-blue-600 to-cyan-800',
    challenges: [
      'Building full-text search with MongoDB text indexes for fast article discovery across thousands of documents',
      'Managing admin panel authentication with role-based access control and secure session handling',
      'Implementing breaking news banner that updates in real-time without affecting page load performance',
      'Deploying backend to Render with env variables, CORS configuration, and MongoDB Atlas connection pooling',
    ],
    futureImprovements: [
      'Add newsletter subscription with automated email delivery using NodeMailer',
      'Implement social sharing with dynamic preview cards (Open Graph meta tags)',
      'Add comment moderation with basic spam detection',
      'Build an analytics dashboard for editors to track popular articles',
    ],
  },
  {
    id: 4,
    title: 'ShopZone',
    subtitle: 'Full-Stack E-Commerce Platform',
    description: 'Complete e-commerce solution with user storefront + admin panel — product management, cart, order tracking, and SSLCommerz payment.',
    fullDescription: 'ShopZone is a complete e-commerce solution built from scratch with separate user-facing storefront and admin management panel. The platform handles the entire shopping journey — product browsing, cart management, checkout, payment via SSLCommerz, and order tracking. The admin panel provides comprehensive tools for product management, order monitoring, and inventory control.',
    highlight: 'SSLCommerz payment integration with IPN handling, refund flow, and real-time inventory sync',
    features: [
      'User & Admin panel',
      'Product management',
      'Cart & checkout',
      'Order tracking',
      'SSLCommerz payment',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'SSLCommerz'],
    liveLinks: [
      { label: 'Client Panel', url: 'https://client-panel.onrender.com/', type: 'client' },
      { label: 'Admin Panel', url: 'https://admin-panel-18zu.onrender.com/login', type: 'admin' },
    ],
    github: 'https://github.com/FarukBadsha0186/ecommerce_frontend_-_backend',
    websiteImage: '<img src="/shopzone.png" alt="ShopZone Website Preview" style="width:100%; height:100%; object-fit:cover; border-radius:12px;" />',
    color: 'from-green-600 to-green-900',
    challenges: [
      'Integrating SSLCommerz payment gateway with validation, IPN handling, and refund flow for the Bangladeshi market',
      'Managing cart state across browser tabs and persisting it across sessions without backend dependency',
      'Order tracking with real-time status updates (Pending → Confirmed → Shipped → Delivered)',
      'Keeping product inventory in sync between orders to prevent overselling during high-traffic periods',
    ],
    futureImprovements: [
      'Add a product recommendation engine based on browsing and purchase history',
      'Implement a coupon and discount system with time-based promotions',
      'Add multi-vendor support so multiple sellers can list products on the same platform',
      'Build wishlist and product comparison features for better buying decisions',
    ],
  },
];

function ProjectDetailsModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full my-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="font-bold text-white text-xl">{project.title}</h2>
            <p className="text-brand-400 text-sm font-medium">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className={`h-56 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative z-10 w-full h-full " dangerouslySetInnerHTML={{ __html: project.websiteImage }} />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-white font-semibold text-base mb-2">📋 Description</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-white font-semibold text-base mb-3">🛠️ Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-white font-semibold text-base mb-3">✨ Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f: string) => (
                <li key={f} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Faced */}
          <div className="bg-orange-900/10 border border-orange-700/30 rounded-xl p-5">
            <h3 className="text-orange-300 font-semibold text-base mb-3">⚠️ Challenges Faced</h3>
            <ul className="space-y-2.5">
              {project.challenges.map((c: string, i: number) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-orange-400 font-mono text-xs mt-0.5">{i + 1}.</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="bg-brand-900/10 border border-brand-700/30 rounded-xl p-5">
            <h3 className="text-brand-300 font-semibold text-base mb-3">🚀 Future Improvements</h3>
            <ul className="space-y-2.5">
              {project.futureImprovements.map((f: string, i: number) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">→</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-800">
            {project.liveLinks.map((link) => {
              const Icon = link.type === 'admin' ? ShieldCheck : link.type === 'client' ? Users : ExternalLink;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm py-2.5"
                >
                  <Icon size={14} />
                  {link.label}
                </a>
              );
            })}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 flex items-center justify-center gap-2 text-sm py-2.5"
            >
              <Github size={14} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

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

            {/* Image + Live badge */}
            <div className={`h-44 rounded-xl mb-5 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div
                className="relative z-10 w-full h-full "
                dangerouslySetInnerHTML={{ __html: project.websiteImage }}
              />
              <a
                href={project.liveLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 hover:border-green-400/50 rounded-full px-2.5 py-1 transition-all"
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-xs font-medium">Live</span>
              </a>
            </div>

            <div className="flex-1 flex flex-col">
              {/* Title */}
              <h3 className="font-bold text-white text-lg">{project.title}</h3>
              <p className="text-brand-400 text-sm font-medium mb-3">{project.subtitle}</p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 4).map((tech: string) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="badge text-slate-500 border-slate-600/40">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Key Challenge */}
              <div className="bg-orange-900/10 border border-orange-700/30 rounded-lg p-3 mb-5">
                <p className="text-orange-300 text-xs font-semibold mb-1 uppercase tracking-wider">⚠️ Key Challenge</p>
                <p className="text-slate-300 text-xs leading-relaxed">{project.highlight}</p>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setActiveProject(project)}
                className="w-full flex items-center justify-center gap-2 text-sm py-3 rounded-xl bg-brand-900/40 hover:bg-brand-900/60 border border-brand-600/50 hover:border-brand-500 text-brand-300 hover:text-brand-200 font-semibold transition-all duration-200 mt-auto"
              >
                View Details →
              </button>
            </div>

          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectDetailsModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}