import React from "react";
import "./Footer.css";

function Footer() {
    return(<>

    <div className="footer">
        <div className="footer-container">
            <img src="/images/logo_cpe_preto.png" className="footer-img-logo" alt="CPE"></img>
            <div className="footer-text-container">
                <button className="footer-text">Trabalhe Conosco</button>
                <button className="footer-text">Fale com a gente</button>
                <button className="footer-text">Faq</button>
            </div>
            <div className="footer-social-container">
                <img className="footer-img-social" src="/images/linkedin.png" alt="LinkedIn"></img>
                <img className="footer-img-social" src="/images/twitter.png" alt="Twitter"></img>
                <img className="footer-img-social" src="/images/instagram.png" alt="Instagram"></img>
                <img className="footer-img-social" src="/images/facebook.png" alt="Facebook"></img>
            </div>
        </div>
    </div>

    </>)
}

export default Footer;