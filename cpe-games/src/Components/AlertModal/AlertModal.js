import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

import { Button, Modal } from "@mui/material";
import "./AlertModal.css";

function AlertModal(props) {


    let action = () => {};
    const navigate = useNavigate();

    if(props.success) {
        action = () => {
            navigate("/login");
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