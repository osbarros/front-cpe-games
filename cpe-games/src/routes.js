import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import HomeDeslogado from "./Pages/HomeDeslogado";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import Footer from "../src/Components/Footer";

function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/homeDeslogado" component={HomeDeslogado}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/temp" component={TempRota}/>
            </Switch>
        </BrowserRouter>
    );
}

function TempRota() {
    return(<>

    <Footer>
        <Switch>
            <Route path="/temp"/>
        </Switch>
    </Footer>
    </>);
}

export default Rotas;