import {NavLink} from 'react-router-dom';



const Header = () => {
    return (
    <header>
        <nav className="navigation">

            <ul className="nav">
                <div className="logo-wrapper">

                    <li className="nav-links"><NavLink to="" className="links">Home</NavLink></li>
                </div>
                <div className="wrapper">

                    <li className="nav-links"><NavLink to="" className="links">Festivals</NavLink></li>
                    <li className="nav-links"><NavLink to="" className="links">Add Festival</NavLink></li>
                    <li className="nav-links"><NavLink to="" className="links">Login</NavLink></li>
                    <li className="nav-links"><NavLink to="" className="links">Register</NavLink></li>
                    <li className="nav-links"><NavLink to="" className="links">Logout</NavLink></li>
                    <li className="nav-links"><NavLink to="" className="links"><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                </div>
            </ul>

            <article className="img-background">
                <img src="https://cdn.pixabay.com/photo/2015/09/05/20/39/acoustic-925174_1280.jpg" alt="pic"/>
            </article>


        </nav>
        </header>
    )
}

export default Header;