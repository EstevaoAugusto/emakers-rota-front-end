import {useState} from 'react';
import styles from "../style/ImageSlider.module.css";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ImageSlider = () => {

  const [ pagina, setpagina ] = useState(0);


  const proximaPagina = () => {
    setpagina( paginaAnterior => ( (paginaAnterior + 1) % imagensPropriedades.length)) 
  }

  const anteriorPagina = () => {
    setpagina( paginaAnterior => paginaAnterior === 0 ? imagensPropriedades.length - 1 : paginaAnterior - 1 )
  }

  // A pagina normalmente mostra 3 jogos por vez
  // No mobile, deve mostrar 1 jogo por vez
  const imagensPropriedades = [
    {
      caminho: "src/assets/images/widescreen/GodOfWar2016.png",
      descricao: "Jogo God Of War (2019)",
      key: "1",
      preco: "R$ 299,00",
    },
    {
      caminho: "src/assets/images/widescreen/DaysGone.png",
      descricao: "Jogo Days Gone",
      key: "2",
      preco: "R$ 299,00",
    },
    {
      caminho: "src/assets/images/widescreen/HorizonZeroDawn.png",
      descricao: "Jogo Horizon Zero Dawn",
      key: "3",
      preco: "R$ 299,00",
    },
  ]

  return (
    <section>
      <div className={styles.containerFlex1}>
        <IconButton onClick={anteriorPagina}>
          <ChevronLeftIcon/>
        </IconButton>
          
          <div className={styles.containerFlex2}>
            
            <img className={styles.flex_item} 
                  src={imagensPropriedades[(pagina + 2) % imagensPropriedades.length].caminho} 
                  alt={imagensPropriedades[(pagina + 2) % imagensPropriedades.length].descricao} 
                  
                  />
            <img className={styles.flex_item} 
                  src={imagensPropriedades[(pagina + 1) % imagensPropriedades.length].caminho} 
                  alt={imagensPropriedades[(pagina + 1) % imagensPropriedades.length].descricao} 
                  />
                  
          </div>
          <div className={styles.containerFlex3}>
            <img className={`${styles.flex_item} special`} 
                  src={imagensPropriedades[pagina].caminho} 
                  alt={imagensPropriedades[pagina].descricao} 
                  />
          </div>
        <IconButton onClick={proximaPagina}>
          <ChevronRightIcon/>
        </IconButton>
      </div>
    </section>
  );
};

export default ImageSlider;
