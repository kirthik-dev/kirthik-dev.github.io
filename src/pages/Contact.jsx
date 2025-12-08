import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPhone, FaGlobe } from 'react-icons/fa';
import { resumeData } from '../data/resume';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex items-center bg-white">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Whether you have a question, a project opportunity, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Info</h2>
                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Phone</p>
                                    <a href={`tel:${resumeData.contact.phone}`} className="text-slate-900 font-semibold hover:text-green-600 transition-colors">
                                        {resumeData.contact.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Email</p>
                                    <a href={`mailto:${resumeData.contact.email}`} className="text-slate-900 font-semibold hover:text-indigo-600 transition-colors">
                                        {resumeData.contact.email}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Location</p>
                                    <p className="text-slate-900 font-semibold">
                                        {resumeData.contact.location}
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-200">
                                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" title="GitHub">
                                    <FaGithub size={28} />
                                </a>
                                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors" title="LinkedIn">
                                    <FaLinkedin size={28} />
                                </a>
                                <a href={resumeData.contact.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors" title="Portfolio">
                                    <FaGlobe size={28} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-slate-900 placeholder-slate-400" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-slate-900 placeholder-slate-400" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-slate-900 placeholder-slate-400" placeholder="Project details..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
