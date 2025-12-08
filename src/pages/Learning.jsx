import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Learning = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Learning Journey</h1>
                <p className="text-slate-600 max-w-2xl">
                    My academic background and continuous professional development.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FaGraduationCap className="text-indigo-600 text-2xl" />
                        <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                    </div>

                    <div className="space-y-6">
                        {resumeData.education.map((edu, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                                <p className="text-indigo-600 font-medium mt-1">{edu.degree}</p>
                                <p className="text-sm text-slate-500 mt-2">{edu.duration}</p>
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <p className="text-sm text-slate-600">
                                        <span className="font-semibold text-slate-900">Coursework:</span> {edu.coursework}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FaCertificate className="text-pink-600 text-2xl" />
                        <h2 className="text-2xl font-bold text-slate-900">Certifications</h2>
                    </div>

                    <div className="space-y-6">
                        {resumeData.certifications.map((cert, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900">{cert.name}</h3>
                                <p className="text-pink-600 font-medium mt-1">{cert.issuer}</p>
                                <p className="text-sm text-slate-500 mt-2">{cert.date}</p>
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <p className="text-sm text-slate-600">
                                        {cert.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Learning;
