import { Link } from "react-router-dom";

const Login = () => {
    return (

        <form method="POST" className="login">
            <article className="wrapper-login">
    
                <h1 className="login-title">User Login<i className="fa-solid fa-right-to-bracket"></i></h1>
                <div className="wrapper-mail">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className="email" placeholder="Email"/>
                </div>
                <div className="wrapper-pass">
                    <i className="fa-solid fa-lock"></i><input type="password" className="pass" placeholder="Password"/>
                </div>
                <div className="btn-container">
                    <button className="login-btn" type="submit">Login</button >
                </div>
                <p className="login-redirect">If you don't have an account<Link to="/register"> click here!</Link></p>
                
            </article>
     </form>
  
    );
}

export default Login;