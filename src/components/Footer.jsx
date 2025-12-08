import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold text-slate-900">Kirthik</h3>
                        <p className="text-slate-500 text-sm">Data Engineer & AI Enthusiast</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com" className="text-slate-500 hover:text-indigo-600 transition-colors">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://linkedin.com" className="text-slate-500 hover:text-indigo-600 transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://twitter.com" className="text-slate-500 hover:text-indigo-600 transition-colors">
                            <FaTwitter size={20} />
                        </a>
                    </div>

                    <div className="mt-4 md:mt-0 text-sm text-slate-500">
                        © {new Date().getFullYear()} Kirthik. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
