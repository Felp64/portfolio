import { useLanguage } from "../services/translation";
import '../styles/projects.css'
import project1Image from '../assets/project1.jpg';
import project4Image from '../assets/LogoOrganiza.png';

const Projects = () => {
    const { t } = useLanguage()

    const projectsData = [
        {
            image: 'https://i.postimg.cc/3NSG9NHm/logo.png',
            techs: ['React', 'Tailwind CSS', 'Framer Motion', 'Howler.js', 'Vite'],
            titleKey: 'projects.project-5-title',
            descKey: 'projects.project-5-description',
            github: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti4-3170100-plantei/tree/main',
            demo: '#'
        },
        {
            image: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i/main/docs/images/Logo%20Meneger.png',
            techs: ['React', 'CSS3', 'Spring Boot', 'Java', 'MySQL', 'Node.js', 'Docker'],
            titleKey: 'projects.project-6-title',
            descKey: 'projects.project-6-description',
            github: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i',
            demo: '#'
        },
        {
            image: project4Image,
            techs: ['C#', '.NET', 'React', 'JavaScript', 'PostgreSQL', 'HTML5', 'CSS3'],
            titleKey: 'projects.project-7-title',
            descKey: 'projects.project-7-description',
            github: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9577100-organizagestaointeligente',
            demo: '#'
        },
        {
            image: project1Image,
            techs: ['React', 'Vite', 'EmailJS', 'i18next', 'react-router-dom'],
            titleKey: 'projects.project-8-title',
            descKey: 'projects.project-8-description',
            github: 'https://github.com/felp64/portfolioFelp64',
            demo: '#'
        }
    ];

    const smallProjectsData = [
        {
            techs: ['Java', 'MySQL', 'Maven'],
            titleKey: 'smallprojects.project-5-title',
            descKey: 'smallprojects.project-5-description',
            github: 'https://github.com/pucmg-aulas/roombookings-g1-noite-meetingroombooking/tree/master',
            demo: '#'
        }
    ];

    return (
        <section className="projects-content">
            <h1 className="projects-title">
                <span className="projects-tag">/</span>
                {t('projects.title')}
            </h1>

            <p className="projects-subtitle">{t('projects.subtitle')}</p>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.complete-projects')}
            </h2>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <img src={project.image} alt={t(project.titleKey)} className="best-project-image" />
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">&gt; Demo</a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="sub-projects-title">
                <span className="projects-tag">#</span>
                {t('projects.small-projects')}
            </h2>

            <div className="projects-grid">
                {smallProjectsData.map((project, index) => (
                    <div className="best-project-card" key={index}>
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="project-tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3 className="project-title">{t(project.titleKey)}</h3>
                        <p className="project-description">{t(project.descKey)}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">&gt; GitHub</a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">&gt; Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
