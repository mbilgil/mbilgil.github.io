import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiChevronDown } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../../utils/animations';

const Hero = () => {
    const { personal, social } = portfolioData;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-72 h-72 -top-10 -left-10 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute w-72 h-72 -bottom-10 -right-10 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={staggerItem}
                        className="text-base md:text-lg text-primary-light font-medium"
                    >
                        Hi there! 👋 I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={staggerItem}
                        className="text-4xl md:text-5xl font-bold font-heading text-white mb-2"
                    >
                        {personal.name}
                    </motion.h1>

                    {/* Title */}
                    <motion.div variants={staggerItem} className="space-y-1">
                        <h2 className="text-xl md:text-2xl font-semibold gradient-text">
                            {personal.title}
                        </h2>
                        <p className="text-base md:text-lg text-gray-300">
                            at <span className="text-primary-light font-semibold">{personal.company}</span>
                        </p>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={staggerItem}
                        className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        {personal.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-wrap items-center justify-center gap-3 mt-6"
                    >
                        <motion.button
                            onClick={() => scrollToSection('projects')}
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={staggerItem}
                        className="flex items-center justify-center gap-4 mt-8"
                    >
                        <motion.a
                            href={social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href={social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Twitter"
                        >
                            <FiTwitter className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href={social.email}
                            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Email"
                        >
                            <FiMail className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={() => scrollToSection('about')}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label="Scroll to about section"
                >
                    <FiChevronDown className="w-6 h-6" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
