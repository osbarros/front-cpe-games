import React, {useState} from "react"
import "./Header.css"
import { Link, useHistory } from "react-router-dom"


function Header(props) {

    /* const history = useHistory(); */

    const [active, setActive] = useState("header_alt_menu");
        const mobile_menu = () => {
            active === "header_alt_menu"
              ? setActive("header_alt_menu alt_menu_active")
              : setActive("header_alt_menu");
        }; 
    
    return (
        <div className="header_global">
            <div onClick={mobile_menu} className = "mobile_menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
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
            <img src="/images/logo_cpe_preto.png" className="logo_cpe_mobile" alt="CPE"/>
                <div className="header_direita">
                    <div className="header_search" action="">
                        <img src="/images/searchbar.svg" className="header_logo_searchbar" alt="searchbar"/>
                        <input className="header_search_text" placeholder="Pesquisar..."></input>
                    </div>
                    <button className="header_login"
                        onClick={() => {
                            window.location.href=('/login');
                        }}   > LOGIN</button>
                    <button className="header_increver"
                        onClick={() => {
                            window.location.href=('/cadastro');
                        }} > INSCREVA-SE</button>
                </div>
                <div className={active}>
                    <button className="header_alt_jogos">JOGOS</button>
                    <button className="header_alt_campeonatos">CAMPEONATOS</button>
                    <button className="header_alt_loja">LOJA</button>
                    <button className="header_alt_login">LOGIN</button>
                    <button className="header_alt_inscrever">INSCREVA-SE</button>
                </div>
                <img src= "/images/searchbar_mobile.png" className="search_mobile"></img>
            </div>

    )  
}

export default Header





