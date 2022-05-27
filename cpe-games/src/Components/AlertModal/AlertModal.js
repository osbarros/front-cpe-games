import React, { useState } from "react";
import {useHistory} from "react-router-dom"

import { Button, Modal } from "@mui/material";
import "./AlertModal.css";

function AlertModal(props) {


    let action = () => {};
    const history = useHistory();

    if(props.success) {
        action = () => {
            history.push("/login");
        }
    } else {
        action = () => {
            props.onClose();
        }
    }

    return(<>

    <Modal className="alert-modal" open={props.open} onClose={props.onClose}>
        <div className="dialog-container">
            <p className="dialog-message">{props.message}</p>

            <Button className="close-alert-button" variant="contained" onClick={action}>OK</Button>
        </div>
    </Modal>
    </>)
}

export default AlertModal;