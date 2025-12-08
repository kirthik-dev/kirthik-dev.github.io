import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">

            {/* Colorful Background Mesh */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow delay-1000"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 shadow-sm">
                        Data Engineer
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Data</span> Pipelines <br />
                        <span className="text-slate-900">That Scale.</span>
                    </h1>

                    <p className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
                        Data Engineer with 1.5 years of experience in ETL pipelines, data quality frameworks, and cloud-based data solutions. Open to new opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 rounded-full font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-slate-50 hover:shadow-md transition-all duration-200"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
