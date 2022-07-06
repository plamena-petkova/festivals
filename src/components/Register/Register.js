import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import styles from "./Register.module.css";

const Register = () => {

    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let password = formData.get('password');
        let username = formData.get('username');
        let email = formData.get('email');
        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let repass = formData.get('repass');

        const data = {
            username,
            password,
            email,
            firstName, 
            lastName,
            repass
        }

        console.log(data)

        authService.register(data)
                .then(data => {
                    console.log('Register');
                    navigate('/')
                });     
    }

    return (
        <form method="POST" className={styles["register"]} onSubmit={onRegisterHandler}>
            <article className={styles["wrapper-register"]}>
                <h1 className={styles["register-title"]}>User Register<i className="fa-solid fa-id-card"></i></h1>
                <div className={styles["firstName"]}>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className={styles["firstName"]} name="firstName" placeholder="John..."/>
                </div>
                <div className={styles["lastName"]}>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className={styles["lastName"]} name="lastName" placeholder="Smith..."/>
                </div>
                <div className={styles["wrapper-mail"]}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className={styles["username"]} name="username" placeholder="johny123"/>
                </div>
                <div className={styles["wrapper-mail"]}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className={styles["email"]} name="email" placeholder="john@mail.com"/>
                </div>
                <div className={styles["wrapper-pass"]}>
                    <i className="fa-solid fa-lock"></i><input type="password" className={styles["pass"]} name="password" placeholder="******"/>
                </div>
                <div className={styles["wrapper-pass"]}>
                    <i className="fa-solid fa-lock"></i><input type="password" className={styles["repass"]} name="repass" placeholder="******"/>
                </div>
                <div className={styles["btn-container"]}>
                    <button className={styles["register-btn"]} type="submit">Register</button>
                </div>
                <p className={styles["login-redirect"]}>If you have an account<Link to="/login"> click here!</Link></p>
            </article>
        </form>
    );

}

export default Register;