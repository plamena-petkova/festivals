import { Link } from "react-router-dom";


const Register = () => {
    return (
        <form method="POST" className="register">
            <article className="wrapper-register">
                <h1 className="register-title">User Register<i className="fa-solid fa-id-card"></i></h1>
                <div className="firstName">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className="firstName" placeholder="John..."/>
                </div>
                <div className="lastName">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" className="lastName" placeholder="Smith..."/>
                </div>
                <div className="wrapper-mail">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className="email" placeholder="john@mail.com"/>
                </div>
                <div className="wrapper-pass">
                    <i className="fa-solid fa-lock"></i><input type="password" className="pass" placeholder="******"/>
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