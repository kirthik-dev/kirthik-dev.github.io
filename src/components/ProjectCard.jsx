import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index = 0, showFullDescription = false }) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.2 }}
      className="section-shell group flex h-full flex-col"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">{project.category}</div>
          <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-cyan-200 transition duration-300 group-hover:border-cyan-300/30 group-hover:text-cyan-100">
          {Icon ? <Icon size={22} /> : null}
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-brand-muted">{project.impact}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.metrics.map((metric) => (
          <span key={metric} className="pill">
            {metric}
          </span>
        ))}
      </div>

      {showFullDescription ? (
        <ul className="mt-6 space-y-3 text-sm leading-7 text-brand-muted">
          {project.description.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-sm leading-7 text-brand-muted">{project.shortDescription}</p>
      )}

      <div className="soft-line my-6" />

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs leading-6 text-brand-muted">{project.note}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:text-cyan-100"
        >
          <FaGithub size={15} />
          GitHub
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
