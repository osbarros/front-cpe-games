import React from "react";
import Header from "./../../Components/Header";
import HomeBody from "./../../Components/HomeBody";
import Footer from "./../../Components/Footer";
import HeaderLog from "../../Components/HeaderLog";
import Carrosel from "../../Components/Carrosel"

function Home() {
    return (
        <div>
            <Header/>
            <HomeBody/>
            <Carrosel/>
            <Footer/>
        </div>
    );
}

export default Home;
