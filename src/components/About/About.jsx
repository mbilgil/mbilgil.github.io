import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiAward, FiMapPin } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../../utils/animations';

const About = () => {
    const { personal, stats } = portfolioData;

    const iconMap = {
        'briefcase': FiBriefcase,
        'code': FiCode,
        'award': FiAward,
        'map-pin': FiMapPin,
    };

    return (
        <section id="about" className="section-container bg-white dark:bg-slate-900">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                {/* Section Title */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="section-title gradient-text">About Me</h2>
                    <p className="section-subtitle">
                        Get to know me better
                    </p>
                </motion.div>

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Stats Cards */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                    >
                        {stats.map((stat, index) => {
                            const Icon = iconMap[stat.icon];
                            return (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary dark:text-accent group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Bio Content */}
                    <motion.div variants={slideUp} className="text-center space-y-6">
                        {/* Title & Position */}
                        <div className="space-y-3">
                            <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
                                {personal.title}
                            </h3>
                            <div className="flex items-center justify-center gap-3 text-lg">
                                <span className="text-gray-600 dark:text-gray-400">at</span>
                                <span className="gradient-text font-semibold text-xl">{personal.company}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                                <FiMapPin className="w-5 h-5" />
                                <span>{personal.location}</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 max-w-md mx-auto">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                            <div className="w-2 h-2 rounded-full bg-primary dark:bg-accent"></div>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                        </div>

                        {/* Bio Text */}
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            {personal.bio}
                        </p>

                        {/* Key Highlights */}
                        <div className="space-y-4 pt-4">
                            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                                Key Highlights
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4 text-left">
                                {[
                                    { icon: FiBriefcase, text: '5+ years of experience in backend microservices development' },
                                    { icon: FiCode, text: 'Expert in Java Spring Boot, Kafka, Redis, and PostgreSQL' },
                                    { icon: FiAward, text: 'Working on enterprise-scale systems at Turkcell' },
                                    { icon: FiCode, text: 'Passionate about scalable and innovative software solutions' },
                                    { icon: FiAward, text: 'Certified in Apache Kafka and Kubernetes' },
                                ].map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
                                    >
                                        <highlight.icon className="w-5 h-5 text-primary dark:text-accent mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{highlight.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-6"
                        >
                            <a
                                href="#contact"
                                className="inline-block btn-primary text-lg px-8 py-3"
                            >
                                Let's Connect
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
