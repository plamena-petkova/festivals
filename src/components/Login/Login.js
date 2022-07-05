// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import * as authService from '../../services/authService';
import styles from "./Login.module.css"

const Login = () => {
    const { login } = useAuthContext();
    // const [user, setUser] = useState([]);

    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        
        let username = formData.get('username');
        let password = formData.get('password');  
        let email = formData.get('email');
        
        authService.login(username, password, email)
                   .then((userData) => {
                    login(userData);
                    console.log(userData)
                    navigate('/home')
                });  
                
    
    }


  



    return (

        <form method="POST" className={styles["login"]} onSubmit={onLoginHandler}>
            <article className={styles["wrapper-login"]}>
    
                <h1 className={styles["login-title"]}>User Login<i className={`${styles["fa-solid"]} ${styles["fa-right-to-bracket"]}`}></i></h1>
                <div className={styles["wrapper-mail"]}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className={styles["email"]} placeholder="Email" name="email" id="email" />
                </div>
                <div className="wrapper-mail">
                    <i className={`${styles["fa-solid"]} ${styles["fa-envelope"]}`}></i>
                    <input type="text" className={styles["email"]} placeholder="Username" name="username" id="username" />
                </div>
                <div className="wrapper-pass">
                    <i className={`${styles["fa-solid"]} ${styles["fa-lock"]}`}></i><input type="password" className={styles["pass"]} placeholder="Password" name="password" id="pass" />
                </div>
                <div className={styles["btn-container"]}>
                    <button className={styles["login-btn"]} type="submit">Login</button >
                </div>
                <p className={styles["login-redirect"]}>If you don't have an account<Link to="/register"> click here!</Link></p>
                
            </article>
     </form>
  
    );
}

export default Login;