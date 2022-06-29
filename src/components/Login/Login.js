import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';

const Login = () => {

    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let username = formData.get('username');
        let password = formData.get('password');      

        authService.login(email, username, password, )
                   .then((user) => {
                    setUser(user);
                    navigate('/home')
                });     
    
    }

    useEffect(() => {
        
    })


    console.log(user); 
    return (

        <form method="POST" className="login" onSubmit={onLoginHandler}>
            <article className="wrapper-login">
    
                <h1 className="login-title">User Login<i className="fa-solid fa-right-to-bracket"></i></h1>
                <div className="wrapper-mail">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className="email" placeholder="Email" name="email" id="email" />
                </div>
                <div className="wrapper-mail">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" className="email" placeholder="Username" name="username" id="username" />
                </div>
                <div className="wrapper-pass">
                    <i className="fa-solid fa-lock"></i><input type="password" className="pass" placeholder="Password" name="password" id="pass" />
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