import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resume';

const Hero = () => {
  return (
    <section className="page-shell min-h-screen">
      <div className="page-content grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <span className="section-kicker">{resumeData.hero.eyebrow}</span>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {resumeData.hero.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
            {resumeData.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/projects" className="button-primary gap-2">
              Explore projects <FaArrowRight size={13} />
            </Link>
            <Link to="/contact" className="button-secondary">
              Contact for roles
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {resumeData.hero.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <div className="text-2xl font-semibold text-white">{metric.value}</div>
                <div className="mt-2 text-sm leading-6 text-brand-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="section-shell relative overflow-hidden"
        >
          <div className="absolute -right-14 top-8 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute -bottom-10 left-6 h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />

          <div className="relative">
            <div className="text-xs uppercase tracking-[0.34em] text-brand-muted">
              Why teams hire me
            </div>
            <div className="mt-4 space-y-5">
              {resumeData.focusAreas.map((item) => (
                <div key={item.title} className="surface-panel">
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-200">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="soft-line my-6" />

            <div className="flex flex-wrap gap-2">
              {resumeData.skills.slice(0, 6).map((skill) => (
                <span key={skill.name} className="pill">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
