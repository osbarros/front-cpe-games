import React from "react"
import "./Header.css"


function Header() {
    return (
        <div className="header_global">
            <div className = "header_esquerda">
                <img src="/images/logo_cpe.png" className="logo_cpe" alt="CPE"/>
                <div className = "header_jogos">
                    JOGOS 
                </div>
                <div className="header_campeonatos">
                    CAMPEONATOS
                </div>
                <div className="header_loja">
                    LOJA
                </div>
            </div>

                <div className="header_direita">
                    <div className="header_pesquisa">
                        Pesquisa...
                    </div>
                    <div className="header_login">
                        LOGIN
                    </div>
                    <button className="header_increver">
                        INSCREVA-SE
                    </button>
                </div>
            </div>
    )  
}

export default Header