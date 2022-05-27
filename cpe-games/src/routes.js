import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import HomeDeslogado from "./Pages/HomeDeslogado";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import Header from "./Components/Header";
import HeaderLog from "./Components/HeaderLog";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
  

function Rotas() {

    if(isAuthenticated()) {
        return(
            <BrowserRouter>
                    <Switch>
                        <Route path="/" component={renderHeaderLog}/>
                    </Switch>
            </BrowserRouter>
        );
    } else {
        return(
            <BrowserRouter>
                    <Switch>
                        <Route path="/" component={renderHeader}/>
                    </Switch>
            </BrowserRouter>
        );
    }
}

function renderHeaderLog() {
    return(
        <HeaderLog>
            <Switch>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <PrivateRoute path="/perfil" component={Perfil}/>
                <Route component={() => <Redirect to={"/home"}/>}/>
            </Switch>
        </HeaderLog>
    );
}

function renderHeader() {
    return(
        <Header>
            <Switch>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <PrivateRoute path="/perfil" component={Perfil}/>
                <Route component={() => <Redirect to={"/home"}/>}/>
            </Switch>
        </Header>
    );
}


export default Rotas;
