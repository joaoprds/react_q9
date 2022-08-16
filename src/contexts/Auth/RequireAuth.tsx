import { useContext } from "react";
import { Register} from "../../pages/register"
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children}: { children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    if (!auth.user){
        return <Register />
    }
    return children;
}