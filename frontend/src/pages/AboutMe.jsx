import { useLanguage } from '../services/translation'
import Skills from '../components/Skills.jsx'
import '../styles/about.css'
import profilePhoto from "../assets/foto.png"

const AboutMe = () => {
    const { t } = useLanguage()
    const experiences = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <section className="about-content">
                <h1 className="about-title">
                    <span className="about-tag">/</span>
                    {t('about')}
                </h1>

                <p className="about-subtitle">{t('about-subtitle')}</p>

                <div className="about-main">
                    <div className="about-bio">
                        <p>{t('about-paragraph-1')}</p>
                        <p>{t('about-paragraph-2')}</p>
                    </div>

                    <div className="about-photo-wrapper">
                        <img className="about-photo" src={profilePhoto} alt="Profile" />
                    </div>
                </div>
            </section>

            <Skills />

            <section className="experience-content">
                <h1 className="experience-title">
                    <span className="experience-tag">#</span>
                    {t('experience')}
                    <hr></hr>
                </h1>
                <div className="timeline">
                    {experiences.map((id) => (
                        <div className="container" key={id}>
                            <span className="timeline-dot" aria-hidden="true" />
                            <h2 className="enterpriseTitle text-gradient">{t(`enterprise-name-${id}`)}</h2>
                            <div className="text-box">
                                <h2>{t(`position-name-${id}`)}</h2>
                                <small>{t(`period-${id}`)}</small>
                                <p>{t(`job-description-${id}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            </>
    )
}

export default AboutMe
