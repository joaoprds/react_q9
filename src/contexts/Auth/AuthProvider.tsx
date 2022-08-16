import {  useState } from "react"
import { useApi } from "../../hooks/UseApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi;


    const signin = async (email: string) => {
        const data = await api.signin(email);
        if(data.user || data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }


    return (
        <AuthContext.Provider value={{user, signin}}>
            {children}
        </AuthContext.Provider>
    )
}