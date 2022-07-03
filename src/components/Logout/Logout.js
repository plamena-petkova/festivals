import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const Logout = () => {
    const navigate = useNavigate();

    const {logout} = useAuthContext()
   
    
    useEffect(() => {
        authService.logout()
            .then(() => {
                logout();
                navigate('/home');
            })
    }, [logout, navigate])

    return null;
};

export default Logout;