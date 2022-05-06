import React from "react";
import "./Footer.css";

function Footer() {
    return(<>

    <div className="footer">
        <div className="footer-container">
            <img className="footer-img-logo" src="/images/logo_cpe.png" alt="Logo da CPE"></img>
            <div className="footer-text-container">
                <p className="footer-text">Trabalhe Conosco</p>
                <p className="footer-text">Fale com a gente</p>
                <p className="footer-text">Faq</p>
            </div>
            <div className="footer-social-container">
                <a href=""><img className="footer-img-social" src="/images/linkedin.png" alt="LinkedIn"></img></a>
                <a href=""><img className="footer-img-social" src="/images/twitter.png" alt="Twitter"></img></a>
                <a href=""><img className="footer-img-social" src="/images/instagram.png" alt="Instagram"></img></a>
                <a href=""><img className="footer-img-social" src="/images/facebook.png" alt="Facebook"></img></a>
            </div>
        </div>
    </div>

    </>)
}

export default Footer;