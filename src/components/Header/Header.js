import {Link} from 'react-router-dom';

import styles from "./Header.module.css"

import { useAuthContext } from "../../context/AuthContext";


const Header = () => {

const { user } = useAuthContext();

const isUser = Boolean(user.username);

    const userNavigation = (
        <>
        <li className={`${styles["user"]} ${styles["nav-links"]}`}>Hello, {user.username}</li>  
        <li className={styles["nav-links"]}><Link to="/festivals" className={styles["links"]}>Festivals</Link></li>  
        <li className={styles["nav-links"]}><Link to="/add-festival" className={styles["links"]}>Add Festival</Link></li>   
        <li className={styles["nav-links"]}><Link to={`/my-tickets`} className={styles["links"]}>My tickets</Link></li>
        <li className={styles["nav-links"]}><Link to="/cart/:userId" className={styles["links"]}><i className="fa-solid fa-cart-shopping"></i></Link></li>
        <li className={styles["nav-links"]}><Link to="/logout" className={styles["links"]}>Logout</Link></li>
        </>
        )
    const guestNavigation = (
        <>
        <li className={styles["nav-links"]}><Link to="/festivals" className={styles["links"]}>Festivals</Link></li>         
        <li className={styles["nav-links"]}><Link to="/login" className={styles["links"]}>Login</Link></li>
        <li  className={styles["nav-links"]}><Link to="/register" className={styles["links"]}>Register</Link></li>
        </>
    )


    return (
    <header>
        <nav className={styles["navigation"]}>

            <ul className={styles["nav"]}>
                <div className={styles["logo-wrapper"]}>

                    <li className={styles["nav-links"]}><Link to="/home" className={styles["links"]}>Home</Link></li>
                </div>
                <div className={styles["wrapper"]}>

                    {isUser
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