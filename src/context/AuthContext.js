import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage"


export const AuthContext = createContext();

const initialAuthState = {
    username:'',
    id:'',
    sessionToken:''
}

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState([]);
    const [user, setUser] = useLocalStorage('auth', {} );

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user.username}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}

