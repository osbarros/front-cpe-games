import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cadastro.css";

function Cadastro() {
    return (
        <div className="html">
          <div className="body-input">
              <h1 className="cadastro-title">CRIE SUA CONTA</h1>
              <div className="grid">
                  <div className="column-1">
                      <div>
                          <h3 className="input-title">NOME</h3>
                          <input type="text" className="input" ></input>
                      </div>
                      <div>
                          <h3 className="input-title">USUÁRIO</h3>
                          <input type="text" className="input"></input>
                      </div>
                      <div>
                          <h3 className="input-title">PAÍS DE ORIGEM</h3>
                          <input type="text" className="input"></input>
                      </div>

                  </div>
                  <div className="column-2">
                      <div>
                          <h3 className="input-title">EMAIL</h3>
                          <input type="email" className="input"></input>
                      </div>
                      <div>
                          <h3 className="input-title">SENHA</h3>
                          <input type="password" className="input"></input>
                      </div>
                      <div className="jogos">
                          <h3 className="input-title">JOGOS</h3>
                          <div className="checkbox-games">
                              <div className="checkbox-box">
                                  <div>
                                      <input type="checkbox" className="input-checkbox-games" id="LOL"></input>
                                      <label for="LOL">LOL</label>
                                  </div>
                                  <div>
                                      <input type="checkbox" className="input-checkbox-games" id="DOTA 2"></input>
                                      <label for="DOTA 2">DOTA 2</label>
                                  </div>
                              </div>
                              <div className="checkbox-box">
                                  <div>
                                      <input type="checkbox" className="input-checkbox-games" id="PUBG"></input>
                                      <label for="PUBG">PUBG</label>
                                  </div>
                                  <div>
                                      <input type="checkbox" className="input-checkbox-games" id="CS:GO"></input>
                                      <label for="CS:GO">CS:GO</label>
                                  </div>
                              </div>
                              <div className="checkbox-box">
                                  <div>
                                      <input type="checkbox" className="input-checkbox-games" id="FORTNITE"></input>
                                      <label for="FORTNITE">FORTNITE</label>
                                  </div>
                                  <div>
                                      <input type="checkbox" className="input-checkbox-games" id="VALORANT"></input>
                                      <label for="VALORANT">VALORANT</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="button">
                  <input type="button" id="enter" value="CADASTRE-SE"></input>
              </div>
          </div>
        </div>
    );
}

export default Cadastro;
