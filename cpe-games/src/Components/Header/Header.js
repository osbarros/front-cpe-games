import React from "react"
import "./Header.css"


function Header() {
    return (
        <>
            <div className = "header_container">
                <img src="/images/logo_cpe.png" alt="CPE"/>
                <ul className = "header_navegacao">
                    <li>
                        JOGOS 
                    </li>
                    <li>
                        CAMPEONATOS
                    </li>
                    <li>
                        LOJA
                    </li>
                </ul>

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

                <div className="header_linha_branca"/>

            </div>
        </>
    )  
}

export default Header