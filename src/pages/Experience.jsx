import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Experience</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    My professional journey building data systems at scale.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
                    >
                        {/* Header Row - Role and Date */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                            <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium whitespace-nowrap">
                                <FaCalendarAlt className="text-indigo-500" />
                                {exp.duration}
                            </span>
                        </div>

                        {/* Company and Location */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6">
                            <h4 className="text-lg text-pink-600 font-semibold">{exp.company}</h4>
                            <span className="flex items-center gap-1 text-sm text-slate-500">
                                <FaMapMarkerAlt className="text-slate-400" />
                                {exp.location}
                            </span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-3">
                            {exp.description.map((item, i) => (
                                <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                                    <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
