// import { useState } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import * as authService from '../../services/authService';
import styles from "./Login.module.css";
import {Alert} from "react-bootstrap"
// import {nameChangeHandler} from "./LoginValidation.js"

const Login = () => {
    const { login } = useAuthContext();
    const [errors, setErrors] = useState({email:false, username:false, pass: false})

    const navigate = useNavigate();

    
const emailChangeHandler = (event) => {
    event.preventDefault();

    let currentEmail = event.target.value;

    if(currentEmail.length < 3) {
        setErrors(state => ({...state, email: 'Email sould be at least 3 characters!'}))
    } else if (currentEmail.length > 12) {
        setErrors(state => ({...state, email: 'Your email sould be max 12 characters!'}))
    } else {
        setErrors(state => ({...state, email:false}));
    }
}

const usernameChangeHandler = (e) => {
        e.preventDefault();

    let currentUsername = e.target.value;


    if(currentUsername.length < 3) {
        setErrors(state => ({...state, username: 'Your username sould be at least 3 characters!'}))
    } else if (currentUsername.length > 12) {
        setErrors(state => ({...state, username: 'Your username sould be max 12 characters!'}))
    } else {
        setErrors(state => ({...state, username:false}));
    }
}

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let username = formData.get('username');
        let password = formData.get('password');  
        let email = formData.get('email');
        
        authService.login(username, password, email)
                   .then((userData) => {
                    login(userData);
                    navigate('/home')
                });  
                
    }

    return (

        <form method="POST" autoComplete='off' className={styles["login"]} onSubmit={onLoginHandler}>
            <article className={styles["wrapper-login"]}>
    
                <h1 className={styles["login-title"]}>User Login<i className="fa-solid fa-right-to-bracket"></i></h1>
                <div className={styles["wrapper-mail"]}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className={styles["email"]} onChange={emailChangeHandler} placeholder="Email" name="email" id="email" />
                </div>
                <Alert className={styles['alert']} variant="danger" show={errors.email}>{errors.email}</Alert>
                <div className={styles["wrapper-mail"]}>
                <i className="fa-solid fa-user"></i>
                    <input type="text" className={styles["username"]} onChange={usernameChangeHandler} placeholder="Username" name="username" id="username" />
                </div>
                <Alert variant="danger" show={errors.username}>{errors.username}</Alert>
                <div className={styles["wrapper-pass"]}>
                    <i className="fa-solid fa-lock" ></i><input type="password" className={styles["pass"]} placeholder="Password" name="password" id="pass" />
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