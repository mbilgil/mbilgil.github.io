import { motion } from 'framer-motion';
import { FiExternalLink, FiStar } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section-container bg-gray-50 dark:bg-slate-800">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Section Title */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="section-title gradient-text">Featured Projects</h2>
                    <p className="section-subtitle">
                        Showcase of my recent work
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItem}
                            whileHover={{ y: -10 }}
                            className="card p-5 relative group"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-3 right-3">
                                    <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full">
                                        <FiStar className="w-3 h-3" />
                                        Featured
                                    </div>
                                </div>
                            )}

                            {/* Company Badge */}
                            <div className="mb-4">
                                <span className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                                    {project.company}
                                </span>
                            </div>

                            {/* Project Name */}
                            <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                                {project.name}
                            </h3>

                            {/* Period */}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {project.period}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            {project.highlights && project.highlights.length > 0 && (
                                <div className="mb-4">
                                    <ul className="space-y-1.5">
                                        {project.highlights.map((highlight, hIndex) => (
                                            <li
                                                key={hIndex}
                                                className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300"
                                            >
                                                <span className="text-primary dark:text-accent mt-0.5">✓</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technologies */}
                            <div className="mb-4">
                                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Tech Stack:
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Gradient Border on Hover */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    variants={staggerItem}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Want to see more of my work or discuss a project?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block btn-primary"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
