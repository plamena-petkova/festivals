import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <footer>
        <section className={styles["footer-content"]}>
            <article className={styles["contact"]}>
                <ul className={styles["contact-links"]}>
                    <li className={styles["contact-links-item"]}>&copy; 2022 Plamena Petkova</li>
                    <li className={styles["contact-links-item"]}>Varna, Bulgaria</li>
                    <li className={styles["contact-links-item"]}><a href="mailto:pl.petkova@gmail.com"
                            className={styles["email"]}>pl.petkova@gmail.com</a></li>
                </ul>
                <ul className={styles["socials"]}>
                    <li className={styles["social-facebook"]}><a href="https://facebook.com" className={styles["social-links"]}><i
                                className="fa-brands fa-facebook"></i></a></li>
                    <li className={styles["social-instagram"]}><a href="https://instagram.com" className={styles["social-links"]}><i
                                className="fa-brands fa-instagram"></i></a></li>
                    <li className={styles["social-twitter"]}><a href="https://twitter.com" className={styles["social-links"]}><i className="fa-brands fa-twitter"></i></a>
                    </li>
                    <li className={styles["social-youtube"]}><a href="https://youtube.com" className={styles["social-links"]}><i className="fa-brands fa-youtube"></i></a>
                    </li>
                </ul>
            </article>
        </section>
    </footer>
    );
}

export default Footer;