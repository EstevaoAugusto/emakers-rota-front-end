import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../style/Carrossel.module.css";
import { useNavigate } from "react-router-dom";


const Carrossel = () => {
  const navegador = useNavigate();

  const navegar = (rota) => {
    navegador(rota)
  }


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        }
      };
      
    const imagensPropriedades = [
      { 
        caminho: "src/assets/images/posters/BattleForBikiniBottom.png",
        descricao: "Jogo Spongebob SquarePants: Battle For Bikini Bottom Rehydrated",
        key: "1",
        preco: "R$ 299,00",
      }, {
        caminho: "src/assets/images/posters/DeathStranding.png",
        descricao: "Jogo Death Stranding",
        key: "2",
        preco: "R$ 299,00",
      }, {
        caminho: "src/assets/images/posters/GodOfWar2016.png",
        descricao: "Jogo God Of War (2019)",
        key: "3",
        preco: "R$ 299,00",
      }, {
        caminho: "src/assets/images/posters/Mars.png",
        descricao: "Jogo Deliver Us Mars",
        key: "4",
        preco: "R$ 299,00",
      }, {
        caminho: "src/assets/images/posters/Perish.png",
        descricao: "Jogo Perish",
        key: "5",
        preco: "R$ 299,00",
      }, {
        caminho: "src/assets/images/posters/SpellForce.png",
        descricao: "Jogo SpellForce",
        key: "6",
        preco: "R$ 299,00",
      },
    ]
    return (
        <Carousel responsive={responsive}>
        {
          imagensPropriedades.map((imagem) => {
            return (
                <div key={imagem.key} className={styles.flexContainer}>
                  <img  src={imagem.caminho} alt={imagem.descricao} className={styles.imgStyle} onClick={
                    imagem.descricao === "Jogo God Of War (2019)" ? () => {navegar("/TelaJogo")} : null
                    }/>
                  <div className={styles.priceStyle}>{imagem.preco}</div>
                </div>
              );
            }
          )
        }
        </Carousel>
    )
}

export default Carrossel;