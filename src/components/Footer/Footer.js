import {NavLink} from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
        <section className="footer-content">
            <article className="contact">
                <ul className="contact-links">
                    <li className="contact-links-item">&copy; 2022 Plamena Petkova</li>
                    <li className="contact-links-item">Varna, Bulgaria</li>
                    <li className="contact-links-item"><NavLink to="mailto:pl.petkova@gmail.com"
                            className="email">pl.petkova@gmail.com</NavLink></li>
                </ul>
                <ul className="socials">
                    <li className="social-facebook"><NavLink to="" className="social-links"><i
                                className="fa-brands fa-facebook"></i></NavLink></li>
                    <li className="social-instagram"><NavLink to="" className="social-links"><i
                                className="fa-brands fa-instagram"></i></NavLink></li>
                    <li className="social-twitter"><NavLink to="" className="social-links"><i className="fa-brands fa-twitter"></i></NavLink>
                    </li>
                    <li className="social-youtube"><NavLink to="" className="social-links"><i className="fa-brands fa-youtube"></i></NavLink>
                    </li>
                </ul>
            </article>
        </section>
    </footer>
    );
}

export default Footer;