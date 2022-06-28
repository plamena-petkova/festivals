
import {Link} from 'react-router-dom';





const Header = () => {


    const userNavigation = (
        <>
        <li className="nav-links"><Link to="/festivals" className="links">Festivals</Link></li>  
        <li className="nav-links"><Link to="/add-festival" className="links">Add Festival</Link></li>   
        <li className="nav-links"><Link to="/my-tickets" className="links">My tickets</Link></li>
        {/* <li className="nav-links"><Link to="/cart" className="links"><i className="fa-solid fa-cart-shopping"></i></Link></li> */}
        <li className="nav-links"><Link to="/logout" className="links">Logout</Link></li>
        </>
        )
    const guestNavigation = (
        <>
        <li className="nav-links"><Link to="/festivals" className="links">Festivals</Link></li>         
        <li className="nav-links"><Link to="/login" className="links">Login</Link></li>
        <li className="nav-links"><Link to="/register" className="links">Register</Link></li>
        </>
    )


    return (
    <header>
        <nav className="navigation">

            <ul className="nav">
                <div className="logo-wrapper">

                    <li className="nav-links"><Link to="/home" className="links">Home</Link></li>
                </div>
                <div className="wrapper">

                {localStorage.length > 0
                ? userNavigation
                : guestNavigation
                }
                

                
                    
                    
                </div>
            </ul>
        </nav>
        </header>
    )
}

export default Header;