import { useState, useContext, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Register = () => {
    const auth =  useContext(AuthContext)
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }


    const handleLogin = async () => {
        if(email){
            const isLogged = await auth.signin(email);
            if(isLogged){
                navigate('/list')
            } else {
                alert("Login failed");
            }
        }

    }

    return(
        <div>
            <h2>Insira o seu melhor email </h2>
            <input type="text" value={email} onChange={handleEmailInput} placeholder="Digite seu e-mail" ></input>
            <button onClick={handleLogin}>Acessar</button>
        </div>
    )
}