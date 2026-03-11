import { useLanguage } from '../services/translation'
import "../styles/contacts.css"

// icones da bibiloteca react-icons
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import EmailForm from './EmailForm'  

const Contacts = () => {
    const { t } = useLanguage()

    // lista de contatos, cada um com href, label e ícone, editar as urls com suas informações
    const items = [
        { href: 'https://www.linkedin.com/in/felipe-augusto-mendes-pereira/', label: 'LinkedIn', icon: <FaLinkedin /> },
        { href: 'https://github.com/Felp64', label: 'Github', icon: <FaGithub /> },
        { href: 'mailto:felipepepe64@gmail.com', label: 'Email', icon: <FaEnvelope /> },
        { href: 'https://wa.me/5531971278542', label: 'Whatsapp', icon: <FaWhatsapp /> },
    ];

    return (
        <div id="contact" className="contact-content">
            <h2>
                <span className="hashtag">#</span>{t("contact")}
            </h2>
            <p>{t("contato-resumo")}</p>
            
            <div className="contact-links">
                {items.map(item => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </a>
                ))}
            </div>

            <EmailForm />

        </div>
    )
}

export default Contacts;