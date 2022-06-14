import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';

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
        <form method="POST" className="register" onSubmit={onRegisterHandler}>
            <article className="wrapper-register">
                <h1 className="register-title">User Register<i className="fa-solid fa-id-card"></i></h1>
                <div className="firstName">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className="firstName" name="firstName" placeholder="John..."/>
                </div>
                <div className="lastName">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className="lastName" name="lastName" placeholder="Smith..."/>
                </div>
                <div className="wrapper-mail">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className="username" name="username" placeholder="johny123"/>
                </div>
                <div className="wrapper-mail">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className="email" name="email" placeholder="john@mail.com"/>
                </div>
                <div className="wrapper-pass">
                    <i className="fa-solid fa-lock"></i><input type="password" className="pass" name="password" placeholder="******"/>
                </div>
                <div className="wrapper-pass">
                    <i className="fa-solid fa-lock"></i><input type="password" className="repass" name="repass" placeholder="******"/>
                </div>
                <div className="btn-container">
                    <button className="register-btn" type="submit">Register</button>
                </div>
                <p className="login-redirect">If you have an account<Link to="/login"> click here!</Link></p>
            </article>
        </form>
    );

}

export default Register;