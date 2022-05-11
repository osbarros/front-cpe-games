import React from "react";

function Login() {
    return (
    <div>
        <Header/>
        <div className="container-login">
        <h1 className="texto"> A melhor plataforma</h1>
        <h1 className="segundo_texto">De E-Sports do Brasil</h1>
        </div>

    <div className="container-login"> 
        <h1 className="texto">ACESSE SUA CONTA</h1>
        <input type="text" className="input" placeholder="USUÁRIO"></input>  
        <input type="password" className="input" placeholder="SENHA"></input> 
        <button value="Entrar"></button>
        <a href="">Esqueci minha senha</a>
    </div>

    </div>
    )
}

export default Login;