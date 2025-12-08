import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resume';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    // Only show featured projects on home page
    const featuredProjects = resumeData.projects.filter(p => p.featured !== false).slice(0, 3);

    return (
        <div className="min-h-screen bg-white">
            <Hero />

            {/* Featured Projects Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Selected Works</h2>
                        <p className="text-slate-600">Engineering data for scale and intelligence.</p>
                    </div>
                    <Link to="/projects" className="hidden sm:flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
                        View All Projects <FaArrowRight />
                    </Link>
                </div>

                {/* Project cards with short descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} showFullDescription={false} />
                    ))}
                </div>

                <div className="mt-12 text-center sm:hidden">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
                        View All Projects <FaArrowRight />
                    </Link>
                </div>
            </section>

            {/* Skills/Competencies Overview */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Decorative Blur */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Core Competencies</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        {resumeData.skills.slice(0, 8).map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <div key={skill.name} className="flex flex-col items-center gap-3">
                                    <div className="text-4xl hover:scale-110 transition-transform duration-300">
                                        <Icon style={{ color: skill.color }} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-16">
                        <Link
                            to="/skills"
                            className="px-8 py-3 rounded-full font-semibold text-slate-900 bg-white border border-slate-300 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all"
                        >
                            Explore Full Arsenal
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
