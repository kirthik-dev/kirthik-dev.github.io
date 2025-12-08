import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Technical Arsenal</h1>
                <p className="text-slate-600 max-w-2xl">
                    A comprehensive overview of the languages, frameworks, and tools I use to build scalable data solutions.
                </p>
            </motion.div>

            {/* Skill Categories */}
            <div className="space-y-12 mb-16">
                {resumeData.skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIdx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                            {category.category}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Icon Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Technology Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {resumeData.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.03 }}
                                viewport={{ once: true }}
                                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-5xl" style={{ color: skill.color }}>
                                    <Icon />
                                </div>
                                <span className="text-sm font-semibold text-slate-900">{skill.name}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
