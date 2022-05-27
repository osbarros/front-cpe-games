import React, {useState} from "react"
import "./HeaderLog.css"
import { useHistory } from "react-router-dom"
import { logout } from "../../services/auth";


function HeaderLog(props) {
    const history = useHistory();

    const [active, setActive] = useState("headerLog_alt_menu");
        const mobile_menu = () => {
            active === "headerLog_alt_menu"
              ? setActive("headerLog_alt_menu alt_menu_active")
              : setActive("headerLog_alt_menu");
        }; 

    function handleLogout() {
        logout();
        history.push("/home");
        history.go(0);
    }
    
    return (<>
        <div className="header_global">
            <div onClick={mobile_menu} className = "mobile_menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className = "header_esquerda">
                <a href="/home">
                    <img src="/images/logo_cpe_preto.png" className="logo_cpe" alt="CPE"/>
                </a>
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
            <a href="/home">
             <img src="/images/logo_cpe_preto.png" className="logo_cpe_mobile" alt="CPE"/>
            </a>
                <div className="header_direita">
                    <div className="header_search" action="">
                        <img src="/images/searchbar.svg" className="header_logo_searchbar" alt="searchbar"/>
                        <input className="header_search_text" placeholder="Pesquisar..."></input>
                    </div>
                    <div className="sair_perfil">
                        <a href="/perfil">
                         <img src="/images/logo_perfil.svg" className="logo_perfil" alt="perfil"/>
                        </a>
                        <img src="/images/logo_sair.svg" className="logo_sair" alt="sair" onClick={handleLogout}/>
                    </div>
                </div>
                <div className={active}>
                    <button className="header_alt_item">JOGOS</button>
                    <button className="header_alt_item">CAMPEONATOS</button>
                    <button className="header_alt_item">LOJA</button>
                    <button className="header_alt_item"
                     onClick={() => {
                        window.location.href=('/perfil');
                    }}   > PERFIL </button>
                    <button className="header_alt_item" onClick={handleLogout}>SAIR</button>
                </div>
                <img src= "/images/searchbar_mobile.png" className="search_mobile"/>
            </div>

            {props.children}
    </>)  
}

export default HeaderLog