import React from "react";
import { useState } from "react";
import { Modal, Button } from "@mui/material";
import "./PerfilModal.css";

function PerfilModal() {

    const [viewModal, setViewModal] = useState(false);

    return (<>

    <Button variant="contained" onClick={() => setViewModal(true)}>Abrir modal</Button>

    <Modal className="modal-container" open={viewModal} onClose={() => setViewModal(false)}>
        <div className="modal-dialog">
            <h2 className="upper modal-title">Editar perfil</h2>

            <div className="modal-section">
                <label className="upper" for="modal-username">Nome do perfil</label>
                <input className="modal-username"></input>
            </div>


            <div className="modal-section">
                <label className="upper" for="modal-dropdown">Jogo exibido</label>
                <select className="modal-dropdown">
                    <option className="modal-dropdown-opt" value="lol">League of Legends</option>
                    <option className="modal-dropdown-opt" value="lol">Valorant</option>
                    <option className="modal-dropdown-opt" value="lol">Dota 2</option>
                </select>
            </div>

            <div className="modal-section">
                <label className="upper" for="modal-description">Descrição</label>
                <textarea className="modal-description"></textarea>
            </div>

            <Button className="button-submit" variant="contained">Atualizar</Button>
        </div>
    </Modal>
    </>);
}



export default PerfilModal;