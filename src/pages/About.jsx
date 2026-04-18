import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const About = () => {
  return (
    <section className="page-shell">
      <div className="page-content space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-shell"
        >
          <span className="section-kicker">About</span>
          <h1 className="section-title mt-4">A data engineer focused on durable systems, not demo-only wins.</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-brand-muted">{resumeData.summary}</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {resumeData.profileHighlights.map((item) => (
            <div key={item.title} className="surface-panel">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="section-shell">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title mt-4">Recent roles and hands-on delivery.</h2>

          <div className="mt-8 space-y-6">
            {resumeData.experience.map((role, index) => (
              <motion.article
                key={role.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="surface-panel"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">{role.company}</div>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{role.role}</h3>
                    <p className="mt-2 text-sm text-brand-muted">
                      {role.location} | {role.duration}
                    </p>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-muted">{role.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                    {role.stack.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {role.description.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-brand-muted">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-200" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
