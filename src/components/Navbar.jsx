import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { resumeData } from '../data/resume';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Credentials', path: '/learning' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/75 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group">
          <div className="font-display text-3xl tracking-wide text-white">
            Kirthik <span className="text-cyan-200">B</span>
          </div>
          <div className="text-[11px] uppercase tracking-[0.34em] text-brand-muted transition duration-300 group-hover:text-cyan-200">
            Data Engineer
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="rounded-full border border-white/10 bg-white/[0.03] p-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-white text-slate-950'
                      : 'text-brand-muted hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="ml-4 flex items-center gap-3">
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-brand-muted transition hover:border-cyan-300/30 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-brand-muted transition hover:border-cyan-300/30 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={17} />
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-3 text-white transition hover:border-cyan-300/30 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 bottom-0 top-[88px] overflow-y-auto border-t border-white/10 bg-slate-950 shadow-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-white text-slate-950'
                        : 'bg-slate-900 text-brand-muted hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="mt-2 flex items-center gap-3">
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary flex-1"
                >
                  GitHub
                </a>
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary flex-1"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
