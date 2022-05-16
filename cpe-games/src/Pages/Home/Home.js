import React from "react";
import Header from "./../../Components/Header";
import HomeBody from "./../../Components/HomeBody";
import Footer from "./../../Components/Footer";
import HeaderLog from "../../Components/HeaderLog";

function Home() {
    return (
        <div>
            <HeaderLog/>
            <HomeBody/>
            <Footer/>
        </div>
    );
}

export default Home;