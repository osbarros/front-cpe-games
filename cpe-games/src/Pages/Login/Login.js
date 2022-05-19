import React from "react";
import Header from "./../../Components/Header";
import "./Login.css";
function Login() {
    return (
    <div className="login_base">
        <Header/>
        <div className="login_page"> 
        <div className="container_title">
        <h1 className="primeiro_texto"> A melhor plataforma</h1>
        <h1 className="segundo_texto">De E-Sports do Brasil</h1>
        </div>

        <div className="container_login"> 
        <h1 className="texto_a">ACESSE SUA CONTA</h1>
        <h2 className="USUÁRIO">USUÁRIO</h2>
        <input type="text" className="input" placeholder="USUÁRIO"></input>  
        <h2 className="SENHA">SENHA</h2>
        <input type="password" className="input" placeholder="SENHA"></input> 
        <button value="Entrar">ENTRAR</button>
        <a href="">Esqueci minha senha</a>
    </div>
    </div>
        

    </div>
    )
}

export default Login;