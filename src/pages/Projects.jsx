import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h1>
                <p className="text-slate-600 max-w-2xl">
                    A collection of data engineering pipelines and ML systems engineered for scale and performance.
                </p>
            </motion.div>

            {/* Project Cards with full descriptions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {resumeData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} showFullDescription={true} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
