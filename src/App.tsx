import { Toaster } from 'react-hot-toast';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import QAPortfolio from './components/QAPortfolio';
import BuildProcess from './components/BuildProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useTheme();

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#f1f5f9',
            border: '1px solid #334155',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: { iconTheme: { primary: '#22c55e', secondary: '#f1f5f9' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#f1f5f9' } },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <QAPortfolio />
        <BuildProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
