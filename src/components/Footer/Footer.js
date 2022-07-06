import {Link} from 'react-router-dom';
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <footer>
        <section className={styles["footer-content"]}>
            <article className={styles["contact"]}>
                <ul className={styles["contact-links"]}>
                    <li className={styles["contact-links-item"]}>&copy; 2022 Plamena Petkova</li>
                    <li className={styles["contact-links-item"]}>Varna, Bulgaria</li>
                    <li className={styles["contact-links-item"]}><Link to="mailto:pl.petkova@gmail.com"
                            className={styles["email"]}>pl.petkova@gmail.com</Link></li>
                </ul>
                <ul className={styles["socials"]}>
                    <li className={styles["social-facebook"]}><Link to="/" className={styles["social-links"]}><i
                                className="fa-brands fa-facebook"></i></Link></li>
                    <li className={styles["social-instagram"]}><Link to="/" className={styles["social-links"]}><i
                                className="fa-brands fa-instagram"></i></Link></li>
                    <li className={styles["social-twitter"]}><Link to="/" className={styles["social-links"]}><i className="fa-brands fa-twitter"></i></Link>
                    </li>
                    <li className={styles["social-youtube"]}><Link to="/" className={styles["social-links"]}><i className="fa-brands fa-youtube"></i></Link>
                    </li>
                </ul>
            </article>
        </section>
    </footer>
    );
}

export default Footer;