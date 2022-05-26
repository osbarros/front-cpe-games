import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import HomeDeslogado from "./Pages/HomeDeslogado";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/homeDeslogado" element={<HomeDeslogado/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
