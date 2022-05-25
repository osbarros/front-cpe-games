import React from "react";
import { useState } from "react";

import "./CadastroBody.css";

function CadastroBody() {
    const [nome, setNome] = useState("");
    const [nome_usuario, setUsuario] = useState("");
    const [pais, setPais] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    function handleSubmit() {
        const requestBody = { nome, nome_usuario, pais, email, senha};
        requestBody.descricao = "Standard";

        fetch('http://localhost:3333/user', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        }).then((response) => {
            if(response.status == 200) {
                alert("Cadastrado com sucesso!");
            }
        })

    }

    return (
        <div className="cadastro_container">
          <div className="body-input">
              <h1 className="cadastro-title">CRIE SUA CONTA</h1>
              <div className="grid">
                  <div className="column-1">
                      <div>
                          <h3 className="input-title">NOME</h3>
                          <input type="text" className="input" onChange={(e)=>setNome(e.target.value)}></input>
                      </div>
                      <div>
                          <h3 className="input-title">USUÁRIO</h3>
                          <input type="text" className="input" onChange={(e)=>setUsuario(e.target.value)}></input>
                      </div>
                      <div>
                          <h3 className="input-title">PAÍS DE ORIGEM</h3>
                          <input type="text" className="input" onChange={(e)=>setPais(e.target.value)}></input>
                      </div>

                  </div>
                  <div className="column-2">
                      <div>
                          <h3 className="input-title">EMAIL</h3>
                          <input type="email" className="input" onChange={(e)=>setEmail(e.target.value)}></input>
                      </div>
                      <div>
                          <h3 className="input-title">SENHA</h3>
                          <input type="password" className="input" onChange={(e)=>setSenha(e.target.value)}></input>
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
                  <button id="enter" onClick={handleSubmit}>CADASTRE-SE</button>
              </div>
          </div>
        </div>
    );
}

export default CadastroBody;
