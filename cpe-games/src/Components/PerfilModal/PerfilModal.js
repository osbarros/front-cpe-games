import React from "react";
import { useState } from "react";
import { Modal, Button } from "@mui/material";
import "./PerfilModal.css";

// TODO: remover essa função e mudar o export. Esse arquivo é para o Modal.
function PerfilPageTemp() {

    // START: Essa parte deve ser implementada em Perfil [logado]
    const [viewModal, setViewModal] = useState(false);
    
    const _userData = {
        name: "Hugo",
        selectedGame: "League of Legends",
        description: "Lorem ipsum",
    }

    const [userData, setUserData] = useState({..._userData})

    function handleSave(user) {
        setUserData(user);
    }

    // END

    return(<>
        <h1>Nome de usuário: {userData.name}</h1>
        <h1>Jogo selecionado: {userData.selectedGame}</h1>
        <h1>Descrição: {userData.description}</h1>

        <Button variant="contained" onClick={() => setViewModal(true)}>Abrir modal</Button>

        {/* Esse componente aninhado deve ser implementado em Perfil [logado] */}
        <Modal className="modal-container" open={viewModal} onClose={() => setViewModal(false)}>
            <PerfilModal user={userData} onClose={()=>setViewModal(false)} onSave={(user) => {handleSave(user)}}/>
        </Modal>
    </>);
}

function PerfilModal({user, onSave, onClose}) {
    
    const [tempUser, setTempUser] = useState({...user});

    function handleInputChange(e, field) {
        tempUser[field] = e.target.value;
        setTempUser({...tempUser});
    }

    function saveNote() {
        onSave({...tempUser});
        onClose();
    }

    return (<>
        <div className="modal-dialog">
            <h2 className="upper modal-title">Editar perfil</h2>

            <div className="modal-section">
                <label className="upper" for="modal-username">
                    Nome do perfil</label>
                <input className="modal-username" onChange={(e)=>handleInputChange(e, "name")} value={tempUser.name}></input>
            </div>


            <div className="modal-section">
                <label className="upper" for="modal-dropdown">Jogo exibido</label>
                <select className="modal-dropdown" onChange={(e)=>handleInputChange(e, "selectedGame")} value={tempUser.selectedGame}>
                    <option className="modal-dropdown-opt" value="League of Legends">League of Legends</option>
                    <option className="modal-dropdown-opt" value="Valorant">Valorant</option>
                    <option className="modal-dropdown-opt" value="Dota 2">Dota 2</option>
                </select>
            </div>

            <div className="modal-section">
                <label className="upper" for="modal-description">Descrição</label>
                <textarea className="modal-description" onChange={(e)=>handleInputChange(e, "description")} value={tempUser.description}></textarea>
            </div>
            <Button className="button-submit" variant="contained" onClick={saveNote}>Atualizar</Button>
        </div>
    </>);
}



export default PerfilPageTemp;