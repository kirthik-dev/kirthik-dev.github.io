import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Learning = () => {
  return (
    <section className="page-shell">
      <div className="page-content space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-shell"
        >
          <span className="section-kicker">Credentials</span>
          <h1 className="section-title mt-4">Education, training, and the areas I am sharpening now.</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-brand-muted">
            The academic and certification story supports the portfolio, but the main weight stays
            on applied data engineering work and project execution.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="section-shell">
            <span className="section-kicker">Education</span>
            <div className="mt-6 space-y-4">
              {resumeData.education.map((item) => (
                <div key={item.institution} className="surface-panel">
                  <h2 className="text-2xl font-semibold text-white">{item.institution}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan-200">{item.degree}</p>
                  <p className="mt-4 text-sm text-brand-muted">{item.duration}</p>
                  <p className="mt-4 text-sm leading-7 text-brand-muted">{item.coursework}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-shell">
            <span className="section-kicker">Certification</span>
            <div className="mt-6 space-y-4">
              {resumeData.certifications.map((item) => (
                <div key={item.name} className="surface-panel">
                  <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan-200">{item.issuer}</p>
                  <p className="mt-4 text-sm text-brand-muted">{item.date}</p>
                  <p className="mt-4 text-sm leading-7 text-brand-muted">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-shell">
          <span className="section-kicker">Current focus</span>
          <h2 className="section-title mt-4">What I am actively improving next.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {resumeData.learningFocus.map((item) => (
              <div key={item} className="metric-card">
                <p className="text-sm leading-7 text-brand-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
