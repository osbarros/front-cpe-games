import React, {useState} from "react";
import "./LoginBody.css";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";

function LoginBody() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', {email, password});
            login(response.data.accessToken);
            history.push("/home");
            history.go(0);
            
            
        } catch (error) {
            if(error.response.status === 403){
                alert("Credenciais inválidas!");
            }
            else{
                alert(error.response.data.notification);
            }
            console.warn(error);
        }
    }



    return (
        <div className="login_base">

            <div className="login_page">
                <div className="container_title_Login">
                    <h1 className="primeiro_texto_Login"> A melhor plataforma</h1>
                    <h1 className="segundo_texto_Login">De E-Sports do Brasil</h1>
                </div>

                <div className="container_login">
                    <h1 className="texto_a_Login">ACESSE SUA CONTA</h1>
                    <h2 className="usuario_Login">E-MAIL</h2>
                    <input type="text" className="input" placeholder="E-MAIL"
                    onChange={(e) => setEmail(e.target.value)}></input>
                    <h2 className="senha_Login">SENHA</h2>
                    <input type="password" className="input" placeholder="SENHA"
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <button value="Entrar" onClick={handleLogin}>ENTRAR</button>
                    <a href="">Esqueci minha senha</a>
                </div>
            </div>


        </div>
    )
}

export default LoginBody;
