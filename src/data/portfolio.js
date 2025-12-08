export const portfolioData = {
    // Personal Information
    personal: {
        name: "Mehmet Bilgil",
        title: "Expert Software Engineer",
        company: "Turkcell",
        location: "Istanbul, Turkey",
        email: "contact@mbilgil.com",
        tagline: "Crafting scalable backend microservices for enterprise solutions",
        bio: "Highly motivated and results-oriented Senior Software Engineer with 5+ years of experience in designing, developing, and implementing backend microservices using Java with Spring Boot within Agile methodologies. Expertise includes integrating with technologies such as Kafka, Redis, PostgreSQL, MongoDB, RabbitMQ, and Kong. Proficient in testing applications with Unit Testing and ensuring code quality and security using SonarQube and Fortify. Passionate about creating innovative and scalable software solutions to solve complex business challenges.",
    },

    // Social Links
    social: {
        github: "https://github.com/mbilgil",
        linkedin: "https://linkedin.com/in/mehmetbilgil",
        twitter: "https://twitter.com/m_bilgil",
        email: "mailto:contact@mbilgil.com",
    },

    // Professional Summary Stats
    stats: [
        { label: "Years Experience", value: "5+", icon: "briefcase" },
        { label: "Major Projects", value: "3", icon: "code" },
        { label: "Current Role", value: "Expert SE", icon: "award" },
        { label: "Location", value: "Istanbul", icon: "map-pin" },
    ],

    // Work Experience
    experience: [
        {
            id: 1,
            company: "Turkcell",
            logo: "/mbilgil.github.io/assets/images/company-logos/turkcell.png",
            positions: [
                {
                    title: "Expert Software Engineer",
                    period: "Sep 2023 - Present",
                    duration: "2 years 4 months",
                    location: "Istanbul, Turkey",
                    current: true,
                    responsibilities: [
                        "Develop high-performance backend micro-services using Java with Spring Boot",
                        "Integrate with Kafka for event-driven architecture",
                        "Implement caching solutions using Redis",
                        "Work with PostgreSQL databases and Kong API Gateway",
                        "Ensure code quality and security using SonarQube and Fortify",
                    ],
                    technologies: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Kong", "Docker", "Kubernetes"],
                },
                {
                    title: "Senior Software Engineer",
                    period: "Sep 2021 - Sep 2023",
                    duration: "2 years 1 month",
                    location: "Istanbul, Turkey",
                    current: false,
                    responsibilities: [
                        "Full-time position focusing on enterprise-scale microservices",
                        "Worked on mission-critical backend systems",
                        "Collaborated in Agile teams for rapid delivery",
                    ],
                    technologies: ["Java", "Spring Framework", "Docker", "Openshift", "Grafana", "ELK Stack"],
                },
            ],
            totalDuration: "4 years 4 months",
        },
        {
            id: 2,
            company: "Yapı Kredi Teknoloji",
            logo: "/mbilgil.github.io/assets/images/company-logos/yapikredi.png",
            positions: [
                {
                    title: "Software Development Specialist",
                    period: "Feb 2021 - Aug 2021",
                    duration: "7 months",
                    location: "Istanbul, Turkey",
                    current: false,
                    responsibilities: [
                        "Developed Law Management System application using Microservices architecture",
                        "Built frontend with React.js and backend with Java Spring Boot",
                        "Integrated RabbitMQ for asynchronous messaging",
                        "Worked with PL/SQL for database operations",
                    ],
                    technologies: ["Java", "Spring Boot", "React.js", "RabbitMQ", "PL/SQL"],
                },
                {
                    title: "Software Developer",
                    period: "Mar 2020 - Feb 2021",
                    duration: "1 year",
                    location: "Istanbul, Turkey",
                    current: false,
                    responsibilities: [
                        "Contributed to banking technology solutions",
                        "Developed microservices for financial applications",
                    ],
                    technologies: ["Java", "Spring Boot", "RabbitMQ", "Oracle Database"],
                },
            ],
            totalDuration: "1 year 7 months",
        },
        {
            id: 3,
            company: "Ekol Lojistik",
            logo: "/mbilgil.github.io/assets/images/company-logos/ekol.png",
            positions: [
                {
                    title: "Junior Software Developer",
                    period: "Oct 2018 - Feb 2020",
                    duration: "1 year 5 months",
                    location: "Istanbul, Turkey",
                    current: false,
                    responsibilities: [
                        "Started professional career in logistics technology",
                        "Developed software solutions for logistics operations",
                        "Learned industry best practices and Agile methodologies",
                    ],
                    technologies: ["Java", "Spring Framework"],
                },
            ],
            totalDuration: "1 year 5 months",
        },
    ],

    // Projects
    projects: [
        {
            id: 1,
            name: "Adplus Kobi",
            company: "Turkcell",
            period: "Jan 2025 - Present",
            featured: true,
            description: "Contributed to the development of the AdPlus Kobi digital advertising management platform, working with large-scale advertising systems to help small and medium businesses manage their digital campaigns effectively.",
            technologies: ["React.js", "Java", "Spring Boot", "Python", "Redis", "Openshift"]
        },
        {
            id: 2,
            name: "Turkcell BipMeet",
            company: "Turkcell",
            period: "Feb 2023 - Present",
            featured: true,
            description: "Contributed to the development of Turkcell Suit Conference, a secure and scalable video conferencing platform built with a microservices architecture. Played a key role in implementing critical features for real-time communication.",
            technologies: ["Java", "Spring Framework", "Kafka", "Redis", "REST"]
        },
        {
            id: 3,
            name: "Law Management System",
            company: "Yapı Kredi Teknoloji",
            period: "Feb 2021 - Aug 2021",
            featured: true,
            description: "Developed a comprehensive Law Management System application for banking legal operations using modern Microservices architecture. The system streamlined legal case tracking, document management, and compliance processes for the bank's legal department, replacing legacy monolithic systems.",
            technologies: ["Java", "Spring Boot", "React.js", "RabbitMQ", "PL/SQL", "Oracle Database", "PostgreSQL", "Jenkins", "Pivotal Cloud Foundry", "Docker"]
        },
    ],

    // Technical Skills
    skills: {
        backend: [
            { name: "Java", level: "expert", years: "5+", endorsements: 8, icon: "FaJava" },
            { name: "Spring Framework", level: "expert", years: "5+", endorsements: 5, icon: "SiSpring", certified: true },
            { name: "Spring Boot", level: "expert", years: "5+", endorsements: 5, icon: "SiSpringboot" },
            { name: "Python", level: "intermediate", years: "1+", endorsements: 0, icon: "FaPython" },
            { name: "REST API", level: "expert", years: "5+", endorsements: 0, icon: "FaServer" },
            { name: "SOAP", level: "advanced", years: "3+", endorsements: 0, icon: "FaExchangeAlt" },
        ],
        frontend: [
            { name: "React.js", level: "advanced", years: "2+", endorsements: 3, icon: "FaReact" },
            { name: "JavaScript", level: "advanced", years: "3+", endorsements: 0, icon: "SiJavascript" },
        ],
        databases: [
            { name: "PostgreSQL", level: "advanced", years: "4+", endorsements: 2, icon: "SiPostgresql" },
            { name: "MongoDB", level: "advanced", years: "3+", endorsements: 0, icon: "SiMongodb" },
            { name: "Redis", level: "advanced", years: "3+", endorsements: 0, icon: "SiRedis" },
            { name: "Oracle Database", level: "intermediate", years: "2+", endorsements: 0, icon: "SiOracle" },
        ],
        messaging: [
            { name: "Apache Kafka", level: "advanced", years: "3+", endorsements: 0, icon: "SiApachekafka", certified: true },
            { name: "RabbitMQ", level: "advanced", years: "2+", endorsements: 0, icon: "SiRabbitmq" },
        ],
        devops: [
            { name: "Docker", level: "advanced", years: "4+", endorsements: 0, icon: "FaDocker" },
            { name: "Kubernetes", level: "advanced", years: "3+", endorsements: 0, icon: "SiKubernetes", certified: true },
            { name: "Openshift", level: "advanced", years: "2+", endorsements: 0, icon: "SiRedhatopenshift" },
            { name: "Kong API Gateway", level: "advanced", years: "2+", endorsements: 0, icon: "FaServer" },
            { name: "Grafana", level: "intermediate", years: "2+", endorsements: 0, icon: "SiGrafana" },
            { name: "ELK Stack", level: "intermediate", years: "2+", endorsements: 0, icon: "SiElasticsearch" },
            { name: "SonarQube", level: "advanced", years: "3+", endorsements: 0, icon: "SiSonarqube" },
            { name: "Fortify", level: "intermediate", years: "2+", endorsements: 0, icon: "FaShieldAlt" },
        ],
        methodologies: [
            { name: "Agile/Scrum", level: "expert", years: "5+", endorsements: 1, icon: "FaProjectDiagram" },
            { name: "Microservices", level: "expert", years: "5+", endorsements: 0, icon: "FaCubes" },
            { name: "OOP", level: "expert", years: "5+", endorsements: 0, icon: "FaCode" },
            { name: "Unit Testing", level: "advanced", years: "5+", endorsements: 0, icon: "FaVial" },
            { name: "CI/CD", level: "advanced", years: "4+", endorsements: 0, icon: "FaCodeBranch" },
        ],
    },

    // Education
    education: [
        {
            id: 1,
            institution: "Sakarya University",
            degree: "Bachelor's Degree",
            field: "Computer Engineering",
            period: "2014 - 2018",
            location: "Sakarya, Turkey",
            logo: "/mbilgil.github.io/assets/images/sakarya-university.png",
        },
        {
            id: 2,
            institution: "Karlısu Anatolian Teacher High School",
            degree: "High School Diploma",
            field: "Science",
            period: "2010 - 2014",
            location: "Turkey",
        },
    ],

    // Certifications
    certifications: [
        { name: "Apache Kafka Certified", issuer: "Apache Kafka", year: "2023" },
        { name: "Kubernetes Certified", issuer: "Cloud Native Computing Foundation", year: "2023" },
        { name: "LinkedIn Skill Assessment - Spring Framework", issuer: "LinkedIn", year: "2024" },
    ],
};
