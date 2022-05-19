import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroBody from "./Pages/CadastroBody";
import HomeDeslogado from "./Pages/HomeDeslogado";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";

function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cadastro" component={CadastroBody}/>
                <Route path="/homeDeslogado" component={HomeDeslogado}/>
                <Route path="/login" component={Login}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="*" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;
