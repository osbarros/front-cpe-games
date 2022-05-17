import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

//Usei Glide.js para criação do carrosel
//Importar a biblioteca do glide.js
import "./glide/glide.core.css"
import "./glide/glide.theme.css"
import "./Carrosel.css"

// Configurações do Slide
const sliderConfiguration = {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: "center",
  gap: "30",
  keyboard: true,
  //Distância do swipe para mudar item (testar)
  swipeThreshold: 80,
  peek: { before: 50, after: 50 },
  breakpoints: {
    768: {
      perView: 2
    },
    600: {
      peek: { before: 40, after: 40 },
      perView: 1,
      gap: "10"
    },
    320: {
      peek: { before: 30, after: 30 },
      perView: 1,
      gap: "10"
    }
  }
};

//Definição do conteúdo de cada slide para ser renderizado
//pelo .map
const slides = [
  {
    hrefImg: "/images/inter.jpeg",
    title: "COPA INTER - LOL",
    data: "19/03/2023",
    horario: "13:30"
  },
  {
    hrefImg: "/images/localiza.jpeg",
    title: "COPA LOCALIZA - FORTNITE",
    data: "20/10/2022",
    horario: "09:00"
  },
  {
    hrefImg: "/images/heineken.jpeg",
    title: "COPA HEINEKEN - DOTA 2",
    data: "20/10/2022",
    horario: "09:00"
  },
  {
    hrefImg: "/images/razer.jpeg",
    title: "COPA RAZOR - CS:GO",
    data: "20/10/2022",
    horario: "09:00"
  },
  {
    hrefImg: "/images/redbull.jpeg",
    title: "COPA RED BULL - PUBG",
    data: "20/10/2022",
    horario: "09:00"
  }
];

const Carrosel = () => {
  //definição do conteúdo do slide
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    //renderização do slider
    return () => slider.mount()
  }, [slider])

  return (
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {slides.map((e, index) => {
            return (
              <li class="glide__slide" key={index}>
                <a className="carrosel-item-box">
                  <div className="carrosel-item-header">
                    <img className="carrosel-img-copa" src={e.hrefImg}></img>
                    <h4 className="carrosel-item-title">{e.title}</h4>
                  </div>
                  <div className="carrosel-item-body">
                    <p className="carrosel-item-text">{e.data} - {e.horario}</p>
                  </div>
                  <div className="carrosel-item-footer">
                    <img className="logo-item-carrosel" src="/images/logo_cpe.png"></img>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <i class="bi bi-caret-left amarelo"></i>
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <i class="bi bi-caret-right amarelo"></i>
        </button>
      </div>
    </div>
  );
}

export default Carrosel;
