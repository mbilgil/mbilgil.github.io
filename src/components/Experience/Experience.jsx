import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiMapPin, FiCalendar } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem, slideUp } from '../../utils/animations';

const Experience = () => {
    const { experience } = portfolioData;
    const [expandedCompany, setExpandedCompany] = useState(null);

    const toggleExpand = (companyId) => {
        setExpandedCompany(expandedCompany === companyId ? null : companyId);
    };

    return (
        <section id="experience" className="section-container bg-white dark:bg-slate-900">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Section Title */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="section-title gradient-text">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {experience.map((company, index) => (
                                <motion.div
                                    key={company.id}
                                    variants={staggerItem}
                                    className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
                                >
                                    {/* Company Logo */}
                                    {company.logo && (
                                        <div className="absolute left-8 md:left-1/2 top-0 w-12 h-12 -ml-6 md:-ml-6 rounded-lg bg-white dark:bg-white shadow-md flex items-center justify-center z-10 overflow-hidden">
                                            <img
                                                src={company.logo}
                                                alt={`${company.company} logo`}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>
                                    )}
                                    {!company.logo && (
                                        <div className="absolute left-8 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full bg-primary dark:bg-accent border-4 border-white dark:border-slate-900 z-10"></div>
                                    )}

                                    {/* Company Card */}
                                    <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                        <motion.div
                                            className="card p-5 cursor-pointer"
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => toggleExpand(company.id)}
                                        >
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                                                        {company.company}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Total: {company.totalDuration}
                                                    </p>
                                                </div>
                                                <button
                                                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                                    aria-label={expandedCompany === company.id ? 'Collapse' : 'Expand'}
                                                >
                                                    {expandedCompany === company.id ? (
                                                        <FiChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                                    ) : (
                                                        <FiChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                                    )}
                                                </button>
                                            </div>

                                            {/* Latest Position Preview */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-primary dark:text-accent font-semibold text-sm">
                                                    {company.positions[0].current && (
                                                        <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                                                            Current
                                                        </span>
                                                    )}
                                                    <span>{company.positions[0].title}</span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                                    <div className="flex items-center gap-1">
                                                        <FiCalendar className="w-4 h-4" />
                                                        <span>{company.positions[0].period}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <FiMapPin className="w-4 h-4" />
                                                        <span>{company.positions[0].location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Expanded Details */}
                                        <AnimatePresence>
                                            {expandedCompany === company.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden mt-4"
                                                >
                                                    <div className="space-y-6">
                                                        {company.positions.map((position, posIndex) => (
                                                            <div
                                                                key={posIndex}
                                                                className="card p-5 bg-gray-50 dark:bg-slate-800"
                                                            >
                                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                                                    {position.title}
                                                                    {position.current && (
                                                                        <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                                                                            Current
                                                                        </span>
                                                                    )}
                                                                </h4>

                                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                                    <div className="flex items-center gap-1">
                                                                        <FiCalendar className="w-4 h-4" />
                                                                        <span>{position.period} ({position.duration})</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-1">
                                                                        <FiMapPin className="w-4 h-4" />
                                                                        <span>{position.location}</span>
                                                                    </div>
                                                                </div>

                                                                {/* Responsibilities */}
                                                                {position.responsibilities && (
                                                                    <div className="mb-4">
                                                                        <ul className="space-y-2">
                                                                            {position.responsibilities.map((resp, respIndex) => (
                                                                                <li
                                                                                    key={respIndex}
                                                                                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                                                                                >
                                                                                    <span className="text-primary dark:text-accent mt-1">•</span>
                                                                                    <span>{resp}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}

                                                                {/* Technologies */}
                                                                <div>
                                                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                                        Technologies Used:
                                                                    </h5>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {position.technologies.map((tech, techIndex) => (
                                                                            <span
                                                                                key={techIndex}
                                                                                className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                                                                            >
                                                                                {tech}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
