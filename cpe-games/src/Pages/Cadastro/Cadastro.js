import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cadastro.css";

function Cadastro() {
    return (
        <div className="html">
            <div className="body-input">
                <h1>Crie sua conta</h1>
                <div className="grid">
                    <div className="column-1">
                        <input type="text" className="input" placeholder="Nome"></input>
                        <input type="text" className="input" placeholder="Usuário"></input>
                        <input type="text" className="input" placeholder="País de Origem"></input>
                    </div>
                    <div className="column-2">
                        <input type="email" className="input" placeholder="Email"></input>
                        <input type="password" className="input" placeholder="Senha"></input>
                        <div className="checkbox-games">
                            <input type="checkbox" className="input checkbox" id="LOL"></input>
                            <label for="LOL">LOL</label>
                            <input type="checkbox" className="input checkbox" id="PUBG"></input>
                            <label for="PUBG">PUBG</label>
                            <input type="checkbox" className="input checkbox" id="CS:GO"></input>
                            <label for="CS:GO">CS:GO</label>
                            <input type="checkbox" className="input checkbox" id="DOTA 2"></input>
                            <label for="DOTA 2">DOTA 2</label>
                            <input type="checkbox" className="input checkbox" id="VALORANT"></input>
                            <label for="VALORANT">VALORANT</label>
                            <input type="checkbox" className="input checkbox" id="FORTNITE"></input>
                            <label for="FORTNITE">FORTNITE</label>
                        </div>
                    </div>
                </div>
                <input type="button" id="enter" value="CRIAR CONTA"></input>
            </div>
        </div>
    );
}

export default Cadastro;