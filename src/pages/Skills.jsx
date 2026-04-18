import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
  return (
    <section className="page-shell">
      <div className="page-content space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-shell"
        >
          <span className="section-kicker">Skills</span>
          <h1 className="section-title mt-4">A stack shaped around data engineering delivery.</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-brand-muted">
            I have organized the stack the way hiring teams usually evaluate it: platforms,
            warehousing, orchestration, quality, cloud execution, and supporting automation.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {resumeData.skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="section-shell"
            >
              <span className="section-kicker">{category.category}</span>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{category.emphasis}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-shell">
          <span className="section-kicker">Selected tools</span>
          <h2 className="section-title mt-4">Technologies I reach for often.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resumeData.skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="metric-card flex items-center gap-4"
                >
                  <div
                    className="rounded-2xl border border-white/10 p-4"
                    style={{ color: skill.color }}
                  >
                    <Icon size={28} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{skill.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.24em] text-brand-muted">
                      Core toolkit
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
