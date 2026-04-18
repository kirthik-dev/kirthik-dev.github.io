import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../data/resume';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-display text-3xl text-white">{resumeData.name}</div>
          <p className="mt-2 max-w-xl text-sm leading-7 text-brand-muted">
            Data Engineer focused on pipelines, warehouse models, data quality, and analytics systems that stay useful after the demo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="button-secondary gap-2"
          >
            <FaEnvelope size={14} />
            Email
          </a>
          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="button-secondary gap-2"
          >
            <FaLinkedin size={14} />
            LinkedIn
          </a>
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="button-secondary gap-2"
          >
            <FaGithub size={14} />
            GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs uppercase tracking-[0.3em] text-brand-muted">
        Copyright {new Date().getFullYear()} {resumeData.name}
      </div>
    </footer>
  );
};

export default Footer;
