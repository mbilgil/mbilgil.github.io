import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { SiReact, SiVite, SiTailwindcss } from 'react-icons/si';
import { portfolioData } from '../../data/portfolio';

const Footer = () => {
    const { personal, social } = portfolioData;
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <footer className="bg-[#0a0a0f] dark:bg-[#0a0a0f] text-white py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold font-heading gradient-text mb-3">
                            {personal.name}
                        </h3>
                        <p className="text-gray-400 mb-4">
                            {personal.title} at {personal.company}
                        </p>
                        <p className="text-gray-400 text-sm">
                            Building scalable backend microservices for enterprise solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-sm text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-base font-semibold mb-3">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <motion.a
                                href={social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FiGithub className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <FiTwitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={social.email}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                                aria-label="Email"
                            >
                                <FiMail className="w-5 h-5" />
                            </motion.a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            {personal.location}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} {personal.name}. All rights reserved.
                        </p>

                        {/* Made With */}
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>Built with</span>
                            <FiHeart className="w-4 h-4 text-red-500" />
                            <span>using</span>
                            <div className="flex items-center gap-2 ml-2">
                                <SiReact className="w-4 h-4 text-cyan-400" />
                                <SiVite className="w-4 h-4 text-purple-500" />
                                <SiTailwindcss className="w-4 h-4 text-cyan-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
