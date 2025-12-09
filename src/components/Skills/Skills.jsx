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
                                            className="card p-6 relative group cursor-pointer overflow-hidden"
                                        >
                                            {/* Icon */}
                                            <div className="flex justify-center mb-4">
                                                {IconComponent && (
                                                    <IconComponent className="w-12 h-12 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300" />
                                                )}
                                            </div>

                                            {/* Skill Name */}
                                            <h4 className="text-center text-sm font-semibold text-gray-900 dark:text-white">
                                                {skill.name}
                                            </h4>

                                            {/* Gradient Border on Hover */}
                                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
