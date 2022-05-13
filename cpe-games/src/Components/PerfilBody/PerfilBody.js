import React from "react";
import "./PerfilBody.css"

function PerfilBody() {
  return (
    <div>
        <div className="container">
            <div className="container_user">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="user" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                <div className="titulo_perfil">PERFIL</div>
                <button className="editar_perfil">
                    EDITAR PERFIL
                </button>
            </div>

            <div className="container_perfil">
                <img className="imagem_perfil" alt="lol" src="https://pbs.twimg.com/media/E6v5XX5WQAMwlmQ?format=jpg&name=4096x4096"/>
                <div className="fundo_preto">
                    <div className="container_info">
                        <div className="nome_perfil">NOME DE PERFIL</div>
                        <div className="pais_perfil">BRASIL</div>
                        <div className="jogo_perfil">LEAGUE OF LEGENDS</div>
                        <div className="descricao_perfil">Exemplo de descrição de perfil</div>
                    </div>
                </div>
                <div className="perfil_cpegames"><span className="texto_amarelo">CPE </span>GAMES</div>
            </div>
            <div className="frase_cpe"><span className="texto_amarelo2">A MELHOR PLATAFORMA<br/></span> DE <em>E-SPORTS</em><br/> DO <span className="texto_negrito">BRASIL</span></div>
        </div>
    </div>
  );
}

export default PerfilBody;