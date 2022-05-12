import React from "react";
import "./HomeBody.css";

function HomeBody() {
    return (
        <div>
            <div className="container">
                <h1 className="primeiro_texto">
                    A CPE Games é uma plataforma de Esports para você se <span className="texto_negrito">divertir</span> e <span className="texto_negrito">competir</span> com seus amigos
                </h1>
                <h1 className="segundo_texto">CONHEÇA NOSSOS JOGOS</h1>
                <div className="grid_jogos">
                    <div className="container_jogo">
                        <img className="jogo_grid" alt="csgo" src="https://t.ctcdn.com.br/z5L9AEyLJ7asNqxc4kSWo_kjkYU=/1400x788/smart/filters:format(webp)/i548685.png"/>
                        <div className="texto_jogo">CSGO</div>
                    </div>
                    <div className="container_jogo">
                        <img className="jogo_grid" alt="valorant" src="https://conteudo.imguol.com.br/c/galeria/44/2020/06/02/valorant-1591100060180_v2_1x1.jpg"/>
                        <div className="texto_jogo">VALORANT</div>
                    </div>
                    <div className="container_jogo">
                        <img className="jogo_grid" alt="lol" src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8979808f7798ecf5/6216ee875fe07272a8a2447a/2021_Key_art.jpg"/>
                        <div className="texto_jogo">LEAGUE OF LEGENDS</div>
                    </div>
                    <div className="container_jogo">
                        <img className="jogo_grid" alt="fortnite" src="https://static-assets-prod.epicgames.com/fortnite/static/webpack/8f9484f10eb14f85a189fb6117a57026.jpg"/>
                        <div className="texto_jogo">FORTNITE</div>
                    </div>
                    <div className="container_jogo">
                        <img className="jogo_grid" alt="dota2" src="https://tecnoblog.net/meiobit/wp-content/uploads/2020/11/dota-2.jpg"/>
                        <div className="texto_jogo">DOTA 2</div>
                    </div>
                    <div className="container_jogo">
                        <img className="jogo_grid" alt="pubg" src="https://gamerview.uai.com.br/wp-content/uploads/2021/02/destaque_pugb_mobile.jpg"/>
                        <div className="texto_jogo">PUBG</div>
                    </div>
                </div>
                <h1 className="terceiro_texto">PRÓXIMOS CAMPEONATOS</h1>
                <div className="carrossel">
                
                </div>
            </div>
        </div>
    );
}

export default HomeBody;