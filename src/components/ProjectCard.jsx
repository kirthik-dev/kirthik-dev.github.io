import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index = 0, showFullDescription = false }) => {
    const Icon = project.icon;
    const descriptionArray = Array.isArray(project.description) ? project.description : [project.description];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 border border-slate-200"
        >
            {/* Header with Icon */}
            <div className="relative h-28 w-full overflow-hidden bg-gradient-to-br from-indigo-50 to-pink-50 p-6 flex items-center justify-center border-b border-slate-200">
                <div className="text-5xl text-indigo-400 group-hover:scale-110 transition-transform duration-300 z-10">
                    {Icon ? <Icon className="group-hover:text-indigo-600 transition-colors duration-300" /> : null}
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                {/* Title and Links */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex space-x-2 text-slate-400 flex-shrink-0">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors p-1.5 hover:bg-slate-100 rounded-full">
                                <FaGithub size={18} />
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors p-1.5 hover:bg-slate-100 rounded-full">
                                <FaExternalLinkAlt size={16} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                {showFullDescription ? (
                    // Full description with bullet points
                    <ul className="space-y-2 mb-4 flex-1">
                        {descriptionArray.map((item, i) => (
                            <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    // Short description for card preview
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-1">
                        {project.shortDescription || descriptionArray[0]}
                    </p>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                    {project.tech && project.tech.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium border border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
