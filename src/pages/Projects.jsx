import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resume';

const Projects = () => {
  return (
    <section className="page-shell">
      <div className="page-content space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-shell"
        >
          <span className="section-kicker">Projects</span>
          <h1 className="section-title mt-4">Technical proof for data engineering roles.</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-brand-muted">
            The portfolio is intentionally selective. Each project highlights a different dimension
            of data engineering work: lakehouse architecture, streaming-plus-batch reliability,
            distributed Spark processing, and curated analytical outputs.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="metric-card">
            <div className="text-xl font-semibold text-white">Architecture first</div>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              These projects are framed around ingestion, transformation, modeling, and serving
              instead of generic app-build language.
            </p>
          </div>
          <div className="metric-card">
            <div className="text-xl font-semibold text-white">Truth over hype</div>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              Streaming, CDC, orchestration, and cloud language are kept accurate to how each
              system actually works.
            </p>
          </div>
          <div className="metric-card">
            <div className="text-xl font-semibold text-white">Hiring relevance</div>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              The strongest Azure, Spark, Airflow, Snowflake, and warehouse-oriented work is
              surfaced first for data engineering applications.
            </p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {resumeData.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              showFullDescription={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
