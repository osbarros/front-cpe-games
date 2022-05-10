import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import HomeDeslogado from "./Pages/HomeDeslogado";
import HomeLogado from "./Pages/HomeLogado";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
//import Footer from "../src/Components/Footer";
import UserModal from "./Components/PerfilModal/PerfilModal";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/homeDeslogado" element={<HomeDeslogado/>}/>
                <Route path="/homeLogado" element={<HomeLogado/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/temp" element={<TempRota/>}/>
            </Routes>
        </BrowserRouter>
    );
}

function TempRota() {
    return(<>

    <UserModal>
        <Routes>
            <Route path="/temp"/>
        </Routes>
    </UserModal>

    </>);
}

export default Rotas;