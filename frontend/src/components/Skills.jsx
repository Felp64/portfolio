import { useLanguage } from "../services/translation";
import "../styles/skills.css"
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaGitAlt, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus, SiCsharp, SiVisualstudiocode, SiMicrosoftsqlserver, SiMysql } from "react-icons/si";

const Skills = () => {
    const { t } = useLanguage();

     const skillsData = [
        {
            titleKey: 'skills.skill-1-title',
            techs: [
                { name: "Java", icon: <FaJava /> },
                { name: "C", icon: <SiC /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "C#", icon: <SiCsharp /> },
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> }
            ]
        },
        {
            titleKey: 'skills.skill-2-title',
            techs: [
                { name: "VSCode", icon: <SiVisualstudiocode /> },
                { name: "Figma", icon: <FaFigma /> },
                { name: "Git", icon: <FaGitAlt /> }
            ]
        },
        {
            titleKey: 'skills.skill-3-title',
            techs: [
                { name: "React", icon: <FaReact /> }
            ]
        },
        {
            titleKey: 'skills.skill-4-title',
            techs: [
                { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
                { name: "MySQL", icon: <SiMysql /> }
            ]
        }
    ];

    return (
        <section className="skills-content">
            <h1 className="skills-title">
                <span className="skills-tag">#</span>
                {t("skills")}
            </h1>

            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <h3 className="skills-description">
                            {t(skill.titleKey)}
                        </h3>
                        <div className="skills-details">
                            {skill.techs.map((tech) => (
                                <span className="skill-chip" key={tech.name}>
                                    {tech.icon ? <span className="skill-icon" aria-hidden="true">{tech.icon}</span> : null}
                                    <span>{tech.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;