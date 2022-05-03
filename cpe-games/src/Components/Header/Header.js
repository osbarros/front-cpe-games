import React from "react"


function Header() {
    return (
        <div className = "container">
            <img src="/images/logo_cpe.png" alt="CPE"/>
            <ul className = "navegacao">
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

            <div className="login_e_cadastro">
                <div>
                    LOGIN
                </div>
                <div>
                    INSCREVA-SE
                </div>
            </div>

            <div className="linha_branca"/>

        </div>
    )
}

export default Header