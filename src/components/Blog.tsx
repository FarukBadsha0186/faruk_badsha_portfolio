import { useState } from 'react';
import { Clock, X, Tag } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';
import type { BlogPost } from '../data/portfolioData';

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

function BlogModal({ post, onClose }: BlogModalProps) {
  // Simple markdown-like renderer
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-lg font-semibold text-brand-300 mt-5 mb-2">{line.slice(4)}</h3>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="text-white font-semibold mt-3">{line.slice(2, -2)}</p>;
      }
      if (line.startsWith('```')) {
        return null;
      }
      if (line.trim() === '') {
        return <br key={i} />;
      }
      // Code block content
      if (line.startsWith('const ') || line.startsWith('pm.') || line.startsWith('npm ') || line.startsWith('newman ') || line.startsWith('- name:')) {
        return (
          <code key={i} className="block font-mono text-xs text-brand-300 bg-slate-800/60 px-3 py-1 rounded">
            {line}
          </code>
        );
      }
      return <p key={i} className="text-slate-300 leading-relaxed text-sm">{line}</p>;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-start justify-between rounded-t-2xl">
          <div className="pr-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-slate-500 text-xs flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-slate-600 text-xs">{post.date}</span>
            </div>
            <h2 className="text-white font-bold text-lg leading-snug">{post.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex-shrink-0">
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-5">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="badge-green flex items-center gap-1">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
          <div className="prose-custom space-y-1">
            {renderContent(post.content)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="section-divider mx-auto" style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)' }} />
        <h2 className="section-heading">Blog</h2>
        <p className="section-subheading">আমার লেখা টেকনিক্যাল আর্টিকেল</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="card group flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-slate-500 text-xs flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-slate-600 text-xs">{post.date}</span>
            </div>

            <h3 className="font-bold text-white text-lg mb-3 leading-snug group-hover:text-brand-300 transition-colors">
              {post.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span key={tag} className="badge flex items-center gap-1">
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setActivePost(post)}
              className="btn-primary text-sm py-2.5 w-full mt-auto"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {activePost && <BlogModal post={activePost} onClose={() => setActivePost(null)} />}
    </section>
  );
}
