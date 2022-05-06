import React from "react"
import "./Header.css"


function Header() {
    return (
        <div className="header_global">
            <div className = "header_esquerda">
                <img src="/images/logo_cpe_preto.png" className="logo_cpe" alt="CPE"/>
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
                    <div className="header_search" action="">
                        <img src="/images/searchbar.svg" className="header_logo_searchbar" alt="searchbar"/>
                        <input className="header_search_text" placeholder="Pesquisar..."></input>
                    </div>
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

