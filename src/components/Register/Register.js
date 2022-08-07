import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import styles from "./Register.module.css";
import { Alert } from "react-bootstrap"
import { types, useNotificationContext } from "../../context/NotificationContext";
import { useAuthContext } from "../../context/AuthContext"


const Register = () => {

    const { addNotification } = useNotificationContext();
    const { login } = useAuthContext()

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const [errors, setErrors] = useState({ firstName: false, lastName: false, username: false, email: false, password: false })

    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();


        const data = values;

        authService.register(data)
            .then((userData) => {
                login(userData)
                addNotification("You register successfully!", types.success);
                navigate('/')
            })
            .catch(err => {
                addNotification(err.message)
            });
        
    }


    const firstNameChangeHandler = (e) => {
        e.preventDefault();

        let currentName = values.firstName;

        if (currentName.length < 3) {
            setErrors(state => ({ ...state, firstName: 'Your name sould be at least 3 characters!' }))
        } else if (currentName.length > 25) {
            setErrors(state => ({ ...state, firstName: 'Your email sould be max 25 characters!' }))
        } else {
            setErrors(state => ({ ...state, firstName: false }));
        }
    }

    const lastNameChangeHandler = (e) => {
        e.preventDefault();

        let currentName = values.lastName;

        if (currentName.length < 3) {
            setErrors(state => ({ ...state, lastName: 'Your name sould be at least 3 characters!' }))
        } else if (currentName.length > 25) {
            setErrors(state => ({ ...state, lastName: 'Your email sould be max 25 characters!' }))
        } else {
            setErrors(state => ({ ...state, lastName: false }));
        }
    }

    const emailChangeHandler = (e) => {
        e.preventDefault();

        let currentEmail = e.target.value;

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

        let currentUsername = values.username;


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

        let currentPass = values.password;


        if (currentPass.length < 6) {
            setErrors(state => ({ ...state, pass: 'Your password sould be at least 6 characters!' }))
        } else if (currentPass.length > 20) {
            setErrors(state => ({ ...state, pass: 'Your password sould be max 12 characters!' }))
        } else {
            setErrors(state => ({ ...state, pass: false }));
        }
    }


    const isFormValid = !Object.values(errors).some(x => x)

    return (
        <>
            <form method="POST" autoComplete='off' className={styles["register"]} onSubmit={onRegisterHandler}>

                <article className={styles["wrapper-register"]}>
                    <h1 className={styles["register-title"]}>User Register<i className="fa-solid fa-id-card"></i></h1>
                    <div className={styles["firstName-wrapper"]}>
                        <i className="fa-solid fa-user"></i>
                        <input type="text" className={styles["firstName"]} name="firstName" value={values.firstName} onChange={changeHandler} onBlur={firstNameChangeHandler} placeholder="John..." />
                    </div>
                    <Alert className={styles['error']} variant="danger" show={Boolean(errors.firstName)}>{errors.firstName}</Alert>

                    <div className={styles["lastName-wrapper"]}>
                        <i className="fa-solid fa-user"></i>
                        <input type="text" className={styles["lastName"]} name="lastName" value={values.lastName} onChange={changeHandler} onBlur={lastNameChangeHandler} placeholder="Smith..." />
                    </div>
                    <Alert className={styles['error']} variant="danger" show={Boolean(errors.lastName)}>{errors.lastName}</Alert>

                    <div className={styles["wrapper-mail"]}>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" className={styles["username"]} name="username" value={values.username} onChange={changeHandler} onBlur={usernameChangeHandler} placeholder="johny123" />
                    </div>
                    <Alert className={styles['error']} variant="danger" show={Boolean(errors.username)}>{errors.username}</Alert>

                    <div className={styles["wrapper-mail"]}>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" className={styles["email"]} name="email" value={values.email} onChange={changeHandler} onBlur={emailChangeHandler} placeholder="john@mail.com" />
                    </div>
                    <Alert className={styles['error']} variant="danger" show={Boolean(errors.email)}>{errors.email}</Alert>

                    <div className={styles["wrapper-pass"]}>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" onChange={changeHandler} onBlur={passChangeHandler} value={values.password} className={styles["pass"]} name="password" placeholder="******" />
                    </div>
                    <Alert className={styles['error']} variant="danger" show={Boolean(errors.pass)}>{errors.pass}</Alert>

                    <div className={styles["btn-container"]}>
                        <button disabled={!isFormValid} className={styles["register-btn"]} type="submit">Register</button>
                    </div>
                    <p className={styles["login-redirect"]}>If you have an account<Link to="/login"> click here!</Link></p>
                </article>
            </form>
        </>
    );

}

export default Register;