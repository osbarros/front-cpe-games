import React, {useState} from "react";
import "./LoginBody.css";
import {useNavigate} from "react-router-dom";
import api from "../../services/api";


function LoginBody() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', {email, password});
            alert("Bem vindo", response.data.user.nome_usuario);
            navigate("/home");
            console.log(response);
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
                    <button value="Entrar" onClick={login}>ENTRAR</button>
                    <a href="">Esqueci minha senha</a>
                </div>
            </div>


        </div>
    )
}

export default LoginBody;
