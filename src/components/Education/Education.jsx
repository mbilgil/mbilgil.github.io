import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Education = () => {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="section-container bg-white dark:bg-slate-900">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Section Title */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="section-title gradient-text">Education & Certifications</h2>
                    <p className="section-subtitle">
                        My academic background and professional certifications
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="h-1 w-10 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                            Education
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu) => (
                                <motion.div
                                    key={edu.id}
                                    variants={staggerItem}
                                    className="card p-5 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Logo */}
                                        {edu.logo ? (
                                            <div className="w-12 h-12 rounded-lg bg-white dark:bg-white shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                <img
                                                    src={edu.logo}
                                                    alt={`${edu.institution} logo`}
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                                                <span className="text-white text-xl font-bold">
                                                    {edu.institution.substring(0, 1)}
                                                </span>
                                            </div>
                                        )}

                                        {/* Details */}
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                                {edu.institution}
                                            </h4>
                                            <p className="text-base text-primary dark:text-accent font-semibold mb-2">
                                                {edu.degree} - {edu.field}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <FiCalendar className="w-4 h-4" />
                                                    <span>{edu.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <FiMapPin className="w-4 h-4" />
                                                    <span>{edu.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="h-1 w-10 bg-gradient-to-r from-accent to-primary rounded-full"></span>
                            Professional Certifications
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.02 }}
                                    className="card p-5 relative overflow-hidden group"
                                >
                                    {/* Icon */}
                                    <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                                        <FiAward className="w-10 h-10 text-primary dark:text-accent" />
                                    </div>

                                    <div className="relative z-10">
                                        <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                                            {cert.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-500">
                                            Issued: {cert.year}
                                        </p>
                                    </div>

                                    {/* Verified Badge */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">✓</span>
                                        </div>
                                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                            Verified
                                        </span>
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

export default Education;
