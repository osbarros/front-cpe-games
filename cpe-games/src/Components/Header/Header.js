import React from "react"
import "./Header.css"


function Header() {
    return (
        <div className="header_global">
            <div className = "header_esquerda">
                <img src="/images/logo_cpe.png" className="logo_cpe" alt="CPE"/>
                <button className = "header_jogos">
                    JOGOS 
                </button>
                <button className="header_campeonatos">
                    CAMPEONATOS
                </button>
                <button className="header_loja">
                    LOJA
                </button>
            </div>

                <div className="header_direita">
                    <form className="header_search" action="">
                        Faça sua pesquisa...
                    </form>
                    <button className="header_login">
                        LOGIN
                    </button>
                    <button className="header_increver">
                        INSCREVA-SE
                    </button>
                </div>
            </div>
    )  
}

export default Header