import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
        <section className="footer-content">
            <article className="contact">
                <ul className="contact-links">
                    <li className="contact-links-item">&copy; 2022 Plamena Petkova</li>
                    <li className="contact-links-item">Varna, Bulgaria</li>
                    <li className="contact-links-item"><Link to="mailto:pl.petkova@gmail.com"
                            className="email">pl.petkova@gmail.com</Link></li>
                </ul>
                <ul className="socials">
                    <li className="social-facebook"><Link to="/" className="social-links"><i
                                className="fa-brands fa-facebook"></i></Link></li>
                    <li className="social-instagram"><Link to="/" className="social-links"><i
                                className="fa-brands fa-instagram"></i></Link></li>
                    <li className="social-twitter"><Link to="/" className="social-links"><i className="fa-brands fa-twitter"></i></Link>
                    </li>
                    <li className="social-youtube"><Link to="/" className="social-links"><i className="fa-brands fa-youtube"></i></Link>
                    </li>
                </ul>
            </article>
        </section>
    </footer>
    );
}

export default Footer;