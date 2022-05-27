import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import "./PerfilModal.css";

function PerfilModal({user, onSave, onClose}) {

    const [tempUser, setTempUser] = useState({...user});

    const jogos = [];

    function handleInputChange(e, field) {
        tempUser[field] = e.target.value;
        setTempUser({...tempUser});
    }

    function saveNote() {
        onSave({...tempUser}, jogos);
        onClose();
    }


    function handleJogo(e) {
      const id = e.target.id;
      const index = jogos.indexOf(id);

      if(index === -1) {
        jogos.push(id);
      } else {
        jogos.splice(index,1)
      }
      console.log(jogos);
    }

    return (<>
        <div className="modal-dialog">
            <h2 className="upper modal-title">Editar perfil</h2>

            <div className="modal-section">
                <label className="upper" for="modal-username">
                    Nome do perfil</label>
                <input className="modal-username" onChange={(e)=>handleInputChange(e, "nome")} value={tempUser.name}></input>
            </div>


            <div className="modal-section dois">
              <div className="jogos">
                <h3 className="input-title">JOGOS</h3>
                <div className="checkbox-games">
                  <div className="checkbox-box">
                    <div>
                      <input type="checkbox" className="input-checkbox-games" id="LOL" onClick={(e) => {handleJogo(e)}}></input>
                      <label for="LOL">LOL</label>
                    </div>
                    <div>
                      <input type="checkbox" className="input-checkbox-games" id="DOTA 2" onClick={(e) => {handleJogo(e)}}></input>
                      <label for="DOTA 2">DOTA 2</label>
                    </div>
                </div>
                <div className="checkbox-box no-margin">
                  <div>
                    <input type="checkbox" className="input-checkbox-games" id="PUBG" onClick={(e) => {handleJogo(e)}}></input>
                    <label for="PUBG">PUBG</label>
                  </div>
                  <div>
                    <input type="checkbox" className="input-checkbox-games" id="CS:GO" onClick={(e) => {handleJogo(e)}}></input>
                    <label for="CS:GO">CS:GO</label>
                  </div>
                </div>
                <div className="checkbox-box no-margin">
                  <div>
                    <input type="checkbox" className="input-checkbox-games" id="FORTNITE" onClick={(e) => {handleJogo(e)}}></input>
                    <label for="FORTNITE">FORTNITE</label>
                  </div>
                  <div>
                    <input type="checkbox" className="input-checkbox-games" id="VALORANT" onClick={(e) => {handleJogo(e)}}></input>
                    <label for="VALORANT">VALORANT</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-section">
              <label className="upper" for="modal-description">Descrição</label>
              <textarea className="modal-description" onChange={(e)=>handleInputChange(e, "descricao")} value={tempUser.description}></textarea>
          </div>
          <Button className="button-submit" variant="contained" onClick={saveNote}>Atualizar</Button>
        </div>
    </>);
}



export default PerfilModal;
