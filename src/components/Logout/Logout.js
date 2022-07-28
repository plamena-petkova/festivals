import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import {useNotificationContext, types} from '../../context/NotificationContext'

const Logout = () => {
    const navigate = useNavigate();

    const {logout} = useAuthContext();
    const { addNotification } = useNotificationContext();
   
    
    useEffect(() => {
        authService.logout()
            .then(() => {
                logout();
                navigate('/home');
                addNotification('You logged out successfully', types.success)
            })
            .catch(err => {
                addNotification(err, types.error)
                
            })
    }, [logout, navigate, addNotification])

    return null;
};

export default Logout;