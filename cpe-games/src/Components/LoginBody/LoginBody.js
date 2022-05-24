import React from "react";
import "./LoginBody.css";
function LoginBody() {
    return (
        <div className="login_base">
            
            <div className="login_page">
                <div className="container_title_Login">
                    <h1 className="primeiro_texto_Login"> A melhor plataforma</h1>
                    <h1 className="segundo_texto_Login">De E-Sports do Brasil</h1>
                </div>

                <div className="container_login">
                    <h1 className="texto_a_Login">ACESSE SUA CONTA</h1>
                    <h2 className="usuario_Login">USUÁRIO</h2>
                    <input type="text" className="input" placeholder="USUÁRIO"></input>
                    <h2 className="senha_Login">SENHA</h2>
                    <input type="password" className="input" placeholder="SENHA"></input>
                    <button value="Entrar">ENTRAR</button>
                    <a href="">Esqueci minha senha</a>
                </div>
            </div>


        </div>
    )
}

export default LoginBody;