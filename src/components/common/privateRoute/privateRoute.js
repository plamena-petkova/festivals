import { useAuthContext} from "../../../context/AuthContext";
import {Navigate, Outlet} from "react-router-dom"

const PrivateRoute = ({children}) => {

    const { isAuthenticated } = useAuthContext();

    if(!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    return <Outlet />


}

export default PrivateRoute;