import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { resumeData } from '../data/resume';

const contactCards = [
  {
    label: 'Email',
    valueKey: 'email',
    icon: FaEnvelope,
    href: (value) => `mailto:${value}`,
  },
  {
    label: 'Phone',
    valueKey: 'phone',
    icon: FaPhone,
    href: (value) => `tel:${value}`,
  },
  {
    label: 'LinkedIn',
    valueKey: 'linkedin',
    icon: FaLinkedin,
    href: (value) => value,
  },
  {
    label: 'GitHub',
    valueKey: 'github',
    icon: FaGithub,
    href: (value) => value,
  },
];

const Contact = () => {
  return (
    <section className="page-shell">
      <div className="page-content grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-shell"
        >
          <span className="section-kicker">Contact</span>
          <h1 className="section-title mt-4">Open to data engineering conversations that need substance, not buzzwords.</h1>
          <p className="mt-6 text-lg leading-8 text-brand-muted">
            If you are hiring for data engineering work around pipelines, warehouse models,
            validation, or analytics-serving systems, email or LinkedIn is the fastest route.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactCards.map((item) => {
              const Icon = item.icon;
              const value = resumeData.contact[item.valueKey];

              return (
                <a
                  key={item.label}
                  href={item.href(value)}
                  target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                  rel={item.label === 'Email' || item.label === 'Phone' ? undefined : 'noreferrer'}
                  className="metric-card flex items-center gap-4"
                >
                  <div className="rounded-2xl border border-white/10 p-4 text-cyan-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-brand-muted">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-6 text-white">{value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="section-shell"
        >
          <span className="section-kicker">Best fit</span>
          <h2 className="section-title mt-4">Roles I am optimizing this portfolio for.</h2>

          <div className="mt-6 space-y-4">
            <div className="surface-panel">
              <div className="text-lg font-semibold text-white">Data Engineer</div>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                Roles centered on ETL and ELT pipelines, Spark processing, warehousing, data quality,
                and cloud analytics foundations.
              </p>
            </div>
            <div className="surface-panel">
              <div className="text-lg font-semibold text-white">Analytics or platform-adjacent work</div>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                Teams needing data modeling, Snowflake or dbt transformations, curated marts, and
                analyst-ready serving layers.
              </p>
            </div>
            <div className="surface-panel">
              <div className="text-lg font-semibold text-white">Useful secondary edge</div>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                AI-assisted workflow automation where it helps engineering throughput, without
                changing the core identity away from data engineering.
              </p>
            </div>
          </div>

          <div className="soft-line my-6" />

          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${resumeData.contact.email}`} className="button-primary">
              Email me
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Message on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
