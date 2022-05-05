import React from "react"
import "./Header.css"


function Header() {
    return (
        <div className="header_global">
            <div className = "header_container">
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
                <div>
                    Barra de pesquisa
                </div>

                <div className="header_login_e_cadastro">
                    <div>
                        LOGIN
                    </div>
                    <div>
                        INSCREVA-SE
                    </div>
                </div>

            </div>
        </div>
    )  
}

export default Header