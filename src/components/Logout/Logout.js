import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
   
    
    useEffect(() => {
        authService.logout()
            .then(() => {
                navigate('/home');
            })
    }, [])

    return null;
};

export default Logout;