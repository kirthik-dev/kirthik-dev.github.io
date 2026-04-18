import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resume';

const Home = () => {
  const featuredProjects = resumeData.projects.filter((project) => project.featured);

  return (
    <div>
      <Hero />

      <section className="page-shell pt-0">
        <div className="page-content space-y-8">
          <div className="section-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="section-kicker">Why this portfolio works for data roles</span>
                <h2 className="section-title mt-4">Relevant stack. Real scope. Clear delivery.</h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-brand-muted">
                I am optimizing this site for recruiters, hiring managers, and technical reviewers who
                want evidence of production-minded data engineering work without inflated claims.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {resumeData.featuredStats.map((item) => (
                <div key={item.value} className="metric-card">
                  <div className="text-lg font-semibold text-white">{item.value}</div>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="section-shell">
              <span className="section-kicker">Selected work</span>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="section-title">Flagship data engineering projects.</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-muted">
                    Each featured build highlights a different strength: lakehouse architecture,
                    streaming-plus-batch operations, and distributed Spark analytics.
                  </p>
                </div>
                <Link to="/projects" className="eyebrow-link inline-flex items-center gap-2">
                  View all case studies <FaArrowRight size={12} />
                </Link>
              </div>

              <div className="mt-8 grid gap-6 xl:grid-cols-2">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    showFullDescription={false}
                  />
                ))}
              </div>
            </div>

            <div className="section-shell">
              <span className="section-kicker">Professional profile</span>
              <h2 className="section-title mt-4">What I bring to a data team.</h2>
              <div className="mt-6 space-y-4">
                {resumeData.profileHighlights.map((item) => (
                  <div key={item.title} className="surface-panel">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="soft-line my-6" />

              <div className="flex flex-wrap gap-2">
                {resumeData.experience[0].stack.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-shell"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="section-kicker">Capabilities</span>
                <h2 className="section-title mt-4">From ingestion to serving layers.</h2>
                <p className="mt-4 text-sm leading-7 text-brand-muted">
                  My strongest portfolio material sits around pipeline engineering, warehouse-ready
                  models, validation, and cloud execution. AI stays in the background as a useful
                  accelerator where it genuinely helps.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {resumeData.focusAreas.map((area) => (
                  <div key={area.title} className="metric-card">
                    <div className="text-base font-semibold text-white">{area.title}</div>
                    <p className="mt-3 text-sm leading-7 text-brand-muted">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
