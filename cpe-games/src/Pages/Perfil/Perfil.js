import React from "react";
import Header from "./../../Components/Header";
import PerfilBody from "./../../Components/PerfilBody";
import Footer from "./../../Components/Footer";
import HeaderLog from "../../Components/HeaderLog";

function Perfil() {
    return (
        <div>
            <HeaderLog/>
            <PerfilBody/>
            <Footer/>
        </div>
    );
}

export default Perfil;