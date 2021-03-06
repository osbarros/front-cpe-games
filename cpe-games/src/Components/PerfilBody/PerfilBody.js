import React, { useState, useEffect } from "react";
import "./PerfilBody.css"
import PerfilModal from "../PerfilModal";
import { Modal } from "@mui/material";
import { USER_KEY, getUser, getToken } from "../../services/auth";
import api from "../../services/api";

function PerfilBody() {

  const [viewModal, setViewModal] = useState(false);

  // TODO: [BACKEND] esses dados devem ser puxados do banco de dados
  /* Os dados abaixos são apenas iniciais. Como eles podem ser alterados durante uma edição de perfil, utiliza-se useState */
  const data = JSON.parse(getUser());

  // TODO: [BACKEND] após salvar, a mudança deve ser colocada no banco de dados
  function handleSave(user) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    api.put("/user/" + getUser().user_id, {
        "nome": "$user.nome",
        "descricao": "$user.descricao"
    });
  }

  const [jogo, setJogo] = useState(JSON.parse(sessionStorage.getItem("@cpe-games-jogos")));

  const jogos = [];

  function handleJogos(array) {
    array.map((e) => {
      jogos.push({jogo: e});
      sessionStorage.setItem("@cpe-games-jogos", JSON.stringify(jogos))
      setJogo(jogos)
      console.log(jogo);
    })
  }

  return (
    <>
      <div>
          <div className="container">
              <div className="container_user">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="user" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                  <div>
                    <div className="titulo_perfil">PERFIL</div>
                    <button className="editar_perfil" onClick={() => setViewModal(true)}>
                        EDITAR PERFIL
                    </button>
                  </div>
              </div>
              <div className="container_user2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="user2" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                      </svg>
                      <div>
                          <button className="editar_perfil2" onClick={() => setViewModal(true)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="edit_pen" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                              </svg>
                          </button>
                      </div>
              </div>

              <div className="container_perfil">
                  <img className="imagem_perfil" alt="lol" src="https://pbs.twimg.com/media/EZNpfVTX0AQ7JR0?format=jpg&name=4096x4096"/>
                  <img className="imagem_perfil2" alt="lol2" src="https://w0.peakpx.com/wallpaper/178/239/HD-wallpaper-irelia-high-noon-gamer-high-noon-league-of-legends-lol-videogames.jpg"/>
                  <div className="fundo_preto">
                      <div className="container_info">
                          <div className="nome_perfil">{data.nome}</div>
                          <div className="jogo_perfil">
                          {jogo.map((e) => {
                            return (
                              <p>{e.jogo}</p>
                            )
                          })}
                          </div>
                          <div className="pais_perfil">BRASIL</div>
                          <div className="descricao_perfil">{data.descricao}</div>
                      </div>
                  </div>
                  <div className="perfil_cpegames"><span className="texto_amarelo">CPE </span>GAMES</div>
              </div>
              <div className="frase_cpe"><span className="texto_amarelo2">A MELHOR PLATAFORMA<br/></span> DE <em>E-SPORTS</em><br/> DO <span className="texto_negrito2">BRASIL</span></div>
          </div>
      </div>
      <Modal className="modal-container" open={viewModal} onClose={() => setViewModal(false)}>
        <PerfilModal user={data} onClose={()=>setViewModal(false)} onSave={(user, jogos) => {handleSave(user); handleJogos(jogos)}}/>
      </Modal>
    </>);
}

export default PerfilBody;
