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
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 text-center md:text-left"
                    >
                        {/* Professional Greeting */}
                        <motion.div variants={staggerItem} className="space-y-2">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
                                {personal.name}
                            </h1>
                        </motion.div>

                        {/* Title & Company */}
                        <motion.div variants={staggerItem} className="space-y-2">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold gradient-text">
                                {personal.title}
                            </h2>
                            <p className="text-base md:text-lg text-gray-300 flex items-center justify-center md:justify-start gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Currently at <span className="text-primary-light font-semibold ml-1">{personal.company}</span>
                            </p>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            variants={staggerItem}
                            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl"
                        >
                            {personal.tagline}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
                        >
                            <motion.button
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-3 rounded-lg font-semibold bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Connect
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={staggerItem}
                            className="flex items-center justify-center md:justify-start gap-3 pt-2"
                        >
                            <motion.a
                                href={social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="GitHub"
                            >
                                <FiGithub className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-blue-600 transition-all duration-300"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-sky-500 transition-all duration-300"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Twitter"
                            >
                                <FiTwitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={social.email}
                                className="p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Email"
                            >
                                <FiMail className="w-5 h-5" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Glowing background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>

                            {/* Illustration container */}
                            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                                    {/* Abstract code/tech visual */}
                                    <div className="text-center space-y-4">
                                        <div className="text-6xl font-bold gradient-text">{'</>'}</div>
                                        <div className="flex gap-2 justify-center">
                                            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
                                            <div className="w-3 h-3 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-3 h-3 rounded-full bg-accent-secondary animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
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
