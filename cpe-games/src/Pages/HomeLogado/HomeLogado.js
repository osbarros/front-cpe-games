import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./HomeLogado.css";

function HomeLogado() {
    return (
        <div className="container">
            <h1 className="primeiro_texto">
                A CPE Games é uma plataforma de Esports para você se <span className="bold_text">divertir</span> e <span className="bold_text">competir</span> com seus amigos
            </h1>
            <h1 className="segundo_texto">CONHEÇA NOSSOS JOGOS</h1>
            <div className="grid_jogos">
                <ImageList sx={{ width: 1236, height: 1000 }} cols={3} rowHeight={306} gap={5}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} className="item_lista">
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=crop`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=crop&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <h1 className="terceiro_texto">PRÓXIMOS CAMPEONATOS</h1>
            <div className="carrossel">

            </div>
        </div>
    );
}

//imagens dos jogos
const itemData = [
    {
      img: 'https://t.ctcdn.com.br/z5L9AEyLJ7asNqxc4kSWo_kjkYU=/1400x788/smart/filters:format(webp)/i548685.png',
      title: 'Breakfast',
    },
    {
      img: 'https://conteudo.imguol.com.br/c/galeria/44/2020/06/02/valorant-1591100060180_v2_4x3.jpg',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'link',
      title: 'titulo',
    }
  ];

export default HomeLogado;