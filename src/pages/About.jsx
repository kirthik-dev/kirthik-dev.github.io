import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold text-slate-900 mb-6">About Me</h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    {resumeData.summary}
                </p>
            </motion.div>

            {/* Experience Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-center gap-3 mb-8 justify-center">
                    <FaBriefcase className="text-indigo-600 text-2xl" />
                    <h2 className="text-2xl font-bold text-slate-900">Professional Experience</h2>
                </div>

                <div className="space-y-6">
                    {resumeData.experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                        >
                            {/* Header: Role + Date */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                                    <FaCalendarAlt className="text-xs" />
                                    {exp.duration}
                                </span>
                            </div>

                            {/* Company + Location */}
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <p className="text-indigo-600 font-medium">{exp.company}</p>
                                <span className="flex items-center gap-1 text-sm text-slate-500">
                                    <FaMapMarkerAlt className="text-xs" />
                                    {exp.location}
                                </span>
                            </div>

                            {/* Description */}
                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
