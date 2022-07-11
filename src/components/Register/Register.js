import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import styles from "./Register.module.css";
import { Alert } from "react-bootstrap"

const Register = () => {

    const [errors, setErrors] = useState({firstName:false, lastName:false, username: false, email: false, pass: false})

    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let password = formData.get('password');
        let username = formData.get('username');
        let email = formData.get('email');
        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        // let repass = formData.get('repass');

        const data = {
            username,
            password,
            email,
            firstName, 
            lastName,
            // repass
        }

        console.log(data)

        authService.register(data)
                .then(data => {
                    navigate('/')
                });     
    }

    const firstNameChangeHandler = (event) => {
        event.preventDefault();

        let currentName = event.target.value;

        if (currentName.length < 6) {
            setErrors(state => ({ ...state, firstName: 'Your name sould be at least 6 characters!' }))
        } else if (currentName.length > 25) {
            setErrors(state => ({ ...state, firstName: 'Your email sould be max 25 characters!' }))
        } else {
            setErrors(state => ({ ...state, firstName: false }));
        }
    }

    const lastNameChangeHandler = (event) => {
        event.preventDefault();

        let currentName = event.target.value;

        if (currentName.length < 6) {
            setErrors(state => ({ ...state, lastName: 'Your name sould be at least 6 characters!' }))
        } else if (currentName.length > 25) {
            setErrors(state => ({ ...state, lastName: 'Your email sould be max 25 characters!' }))
        } else {
            setErrors(state => ({ ...state, lastName: false }));
        }
    }

    const emailChangeHandler = (event) => {
        event.preventDefault();

        let currentEmail = event.target.value;

        if (currentEmail.length < 3) {
            setErrors(state => ({ ...state, email: 'Your email sould be at least 3 characters!' }))
        } else if (currentEmail.length > 20) {
            setErrors(state => ({ ...state, email: 'Your email sould be max 20 characters!' }))
        } else {
            setErrors(state => ({ ...state, email: false }));
        }
    }


    const usernameChangeHandler = (e) => {
        e.preventDefault();

        let currentUsername = e.target.value;


        if (currentUsername.length < 3) {
            setErrors(state => ({ ...state, username: 'Your username sould be at least 3 characters!' }))
        } else if (currentUsername.length > 20) {
            setErrors(state => ({ ...state, username: 'Your username sould be max 12 characters!' }))
        } else {
            setErrors(state => ({ ...state, username: false }));
        }
    }

    const passChangeHandler = (e) => {
        e.preventDefault();

        let currentPass = e.target.value;


        if (currentPass.length < 6) {
            setErrors(state => ({ ...state, pass: 'Your password sould be at least 6 characters!' }))
        } else if (currentPass.length > 20) {
            setErrors(state => ({ ...state, pass: 'Your password sould be max 12 characters!' }))
        } else {
            setErrors(state => ({ ...state, pass: false }));
        }
    }


    return (
        <>
        <Alert variant="danger" show={errors.username}>{errors.username}</Alert>
        <Alert variant="danger" show={errors.firstName}>{errors.firstName}</Alert>
        <Alert variant="danger" show={errors.lastName}>{errors.lastName}</Alert>
        <Alert variant="danger" show={errors.email}>{errors.email}</Alert>
        <Alert variant="danger" show={errors.pass}>{errors.pass}</Alert>
        
        <form method="POST" autoComplete='off' className={styles["register"]} onSubmit={onRegisterHandler}>
            
            <article className={styles["wrapper-register"]}>
                <h1 className={styles["register-title"]}>User Register<i className="fa-solid fa-id-card"></i></h1>
                <div className={styles["firstName-wrapper"]}>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className={styles["firstName"]} name="firstName" onChange={firstNameChangeHandler} placeholder="John..."/>
                </div>
                
                <div className={styles["lastName-wrapper"]}>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className={styles["lastName"]} name="lastName" onChange={lastNameChangeHandler} placeholder="Smith..."/>
                </div>
                
                <div className={styles["wrapper-mail"]}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className={styles["username"]} name="username" onChange={usernameChangeHandler} placeholder="johny123"/>
                </div>
                
                <div className={styles["wrapper-mail"]}>
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className={styles["email"]} name="email" onChange={emailChangeHandler} placeholder="john@mail.com"/>
                </div>
                
                <div className={styles["wrapper-pass"]}>
                    <i className="fa-solid fa-lock"></i><input type="password" onChange={passChangeHandler} className={styles["pass"]} name="password" placeholder="******"/>
                </div>
                
                <div className={styles["btn-container"]}>
                    <button className={styles["register-btn"]} type="submit">Register</button>
                </div>
                <p className={styles["login-redirect"]}>If you have an account<Link to="/login"> click here!</Link></p>
            </article>
        </form>
        </>
    );

}

export default Register;