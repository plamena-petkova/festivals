// import { useState } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import * as authService from '../../services/authService';
import styles from "./Login.module.css";
import { Alert } from "react-bootstrap"
import { types, useNotificationContext } from "../../context/NotificationContext";

const Login = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const [values, setValues] = useState({username: undefined, password: undefined })
    let [errors, setErrors] = useState({ username: false, pass: false })



    const navigate = useNavigate();


    // const emailChangeHandler = (event) => {
    //     event.preventDefault();

    //     let currentEmail = event.target.value;

    //     if (currentEmail.length < 3) {
    //         setErrors(state => ({ ...state, email: 'Your email sould be at least 3 characters!' }))
    //     } else if (currentEmail.length > 20) {
    //         setErrors(state => ({ ...state, email: 'Your email sould be max 20 characters!' }))
    //     } else {
    //         setErrors(state => ({ ...state, email: false }));
    //     }
    // }

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
        console.log(values);

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

    const onLoginHandler = (e) => {
        e.preventDefault();

        authService.login(values.username, values.password)
            .then((userData) => {
                login(userData);
                addNotification('You logged in successfully', types.success);
                navigate('/home')
            })
            .catch(err => {
                console.log(err)
                addNotification(err.message)
            });

    }

    const isFormValid = !Object.values(errors).some(x => x)

    return (

        <form method="POST" autoComplete="off" className={styles["login"]} onSubmit={onLoginHandler}>
            <article className={styles["wrapper-login"]}>

                <h1 className={styles["login-title"]}>User Login<i className="fa-solid fa-right-to-bracket"></i></h1>
                
                <div className={styles["wrapper-mail"]}>
                    <i className="fa-solid fa-user"></i>
                    
                    <input type="text" className={styles["username"]} value={values.username} onBlur={usernameChangeHandler } onChange={changeHandler}  placeholder="Username" name="username" id="username" />
                </div>
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.username)}>{errors.username}</Alert>
                <div className={styles["wrapper-pass"]}>
               
                    <i className="fa-solid fa-lock" ></i><input type="password" value={values.password}  onBlur={passChangeHandler} onChange={changeHandler}  className={styles["pass"]} placeholder="Password" name="password" id="pass" />
                </div>
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.pass)}>{errors.pass}</Alert>

                <div className={styles["btn-container"]}>
                    <button disabled={!isFormValid} className={styles["login-btn"]} type="submit">Login</button >
                </div>
                <p className={styles["login-redirect"]}>If you don't have an account<Link to="/register"> click here!</Link></p>
            </article>
        </form>

    );
}

export default Login;