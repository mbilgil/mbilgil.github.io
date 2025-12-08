import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDocker, FaPython, FaServer, FaExchangeAlt, FaShieldAlt, FaProjectDiagram, FaCubes, FaCode, FaVial, FaCodeBranch } from 'react-icons/fa';
import {
    SiSpring, SiSpringboot, SiJavascript,
    SiPostgresql, SiMongodb, SiRedis, SiOracle, SiApachekafka, SiRabbitmq,
    SiKubernetes, SiRedhatopenshift, SiGrafana, SiElasticsearch, SiSonarqube,
} from 'react-icons/si';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Skills = () => {
    const { skills } = portfolioData;

    const iconComponents = {
        FaJava, SiSpring, SiSpringboot, SiPython: FaPython, SiReact: FaReact, SiJavascript,
        SiPostgresql, SiMongodb, SiRedis, SiOracle, SiApachekafka, SiRabbitmq,
        FaDocker, SiKubernetes, SiRedhatopenshift, SiGrafana, SiElasticsearch, SiSonarqube,
        FaServer, FaExchangeAlt, FaShieldAlt, FaProjectDiagram, FaCubes, FaCode, FaVial, FaCodeBranch,
    };

    const skillCategories = [
        { title: 'Backend Technologies', skills: skills.backend, gradient: 'from-blue-500 to-cyan-500' },
        { title: 'Frontend Technologies', skills: skills.frontend, gradient: 'from-purple-500 to-pink-500' },
        { title: 'Databases', skills: skills.databases, gradient: 'from-green-500 to-emerald-500' },
        { title: 'Messaging & Streaming', skills: skills.messaging, gradient: 'from-orange-500 to-red-500' },
        { title: 'DevOps & Tools', skills: skills.devops, gradient: 'from-indigo-500 to-purple-500' },
        { title: 'Methodologies', skills: skills.methodologies, gradient: 'from-pink-500 to-rose-500' },
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'expert': return 'bg-green-500';
            case 'advanced': return 'bg-blue-500';
            case 'intermediate': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <section id="skills" className="section-container bg-gray-50 dark:bg-slate-800">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                {/* Section Title */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="section-title gradient-text">Technical Skills</h2>
                    <p className="section-subtitle">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            variants={staggerItem}
                            className="space-y-6"
                        >
                            {/* Category Title */}
                            <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2">
                                <span className={`h-1 w-10 bg-gradient-to-r ${category.gradient} rounded-full`}></span>
                                {category.title}
                            </h3>

                            {/* Skills Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {category.skills.map((skill, skillIndex) => {
                                    const IconComponent = iconComponents[skill.icon];
                                    return (
                                        <motion.div
                                            key={skillIndex}
                                            variants={staggerItem}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="card p-4 relative group cursor-pointer"
                                        >
                                            {/* Certified Badge */}
                                            {skill.certified && (
                                                <div className="absolute top-2 right-2">
                                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                                        <span className="text-white text-xs font-bold">✓</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Icon */}
                                            <div className="flex justify-center mb-3">
                                                {IconComponent && (
                                                    <IconComponent className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300" />
                                                )}
                                            </div>

                                            {/* Skill Name */}
                                            <h4 className="text-center text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                {skill.name}
                                            </h4>

                                            {/* Level Indicator */}
                                            <div className="flex items-center justify-center gap-1 mb-2">
                                                {[1, 2, 3].map((dot) => (
                                                    <div
                                                        key={dot}
                                                        className={`w-2 h-2 rounded-full ${(skill.level === 'expert' && dot <= 3) ||
                                                            (skill.level === 'advanced' && dot <= 2) ||
                                                            (skill.level === 'intermediate' && dot <= 1)
                                                            ? getLevelColor(skill.level)
                                                            : 'bg-gray-300 dark:bg-gray-600'
                                                            }`}
                                                    ></div>
                                                ))}
                                            </div>

                                            {/* Details */}
                                            <div className="text-center text-xs">
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {skill.years} years
                                                </p>
                                                {skill.endorsements > 0 && (
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                                        {skill.endorsements} endorsements
                                                    </p>
                                                )}
                                            </div>

                                            {/* Hover Effect - Gradient Border */}
                                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legend */}
                <motion.div
                    variants={staggerItem}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">Expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">Advanced</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">Intermediate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">Certified</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
