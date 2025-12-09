import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiStar, FiX, FiMaximize2 } from 'react-icons/fi';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Projects = () => {
    const { projects } = portfolioData;
    const [selectedProject, setSelectedProject] = useState(null);

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

                {/* Projects Grid - 4 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItem}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedProject(project)}
                            className="card p-4 relative group overflow-hidden cursor-pointer flex flex-col h-full"
                        >
                            {/* Header with Badges - Fixed height */}
                            <div className="mb-3 min-h-[28px]">
                                <div className="flex items-start justify-between gap-2">
                                    {/* Company Badge */}
                                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 text-primary-700 dark:text-accent-300 rounded-full border border-primary/20 dark:border-accent/20">
                                        {project.company}
                                    </span>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: index * 0.1, type: "spring" }}
                                        >
                                            <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                <FiStar className="w-3 h-3" />
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Project Name & Period - Fixed height */}
                            <div className="mb-2 min-h-[52px]">
                                <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                    {project.name}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    {project.period}
                                </p>
                            </div>

                            {/* Description - Fixed height */}
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-3 line-clamp-3 min-h-[54px]">
                                {project.description}
                            </p>

                            {/* Technologies - Flexible, grows to fill space */}
                            <div className="mb-3 flex-grow">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: techIndex * 0.03 }}
                                            viewport={{ once: true }}
                                            className="px-1.5 py-0.5 text-xs font-medium bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 text-primary-700 dark:text-accent-300 rounded border border-primary/20 dark:border-accent/20"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Click for details indicator - Always at bottom */}
                            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                                <FiMaximize2 className="w-3 h-3" />
                                <span className="font-medium">Click for details</span>
                            </div>

                            {/* Gradient Border on Hover */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
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

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                                            {selectedProject.name}
                                        </h2>
                                        {selectedProject.featured && (
                                            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                <FiStar className="w-3 h-3" />
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 text-primary-700 dark:text-accent-300 rounded-full border border-primary/20 dark:border-accent/20 font-semibold">
                                            {selectedProject.company}
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            {selectedProject.period}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                >
                                    <FiX className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 space-y-6">
                                {/* Summary */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                        Project Summary
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                        Technology Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 text-primary-700 dark:text-accent-300 rounded-lg border border-primary/20 dark:border-accent/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                        Timeline
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                        <span className="font-semibold">{selectedProject.period}</span>
                                        <span className="text-gray-500 dark:text-gray-400">at</span>
                                        <span className="font-semibold text-primary dark:text-accent">{selectedProject.company}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
