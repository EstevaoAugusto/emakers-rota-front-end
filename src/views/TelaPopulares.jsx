import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../style/Populares.module.css";
import JogoItem from "../components/JogoItemPopulares.jsx";
import { useState } from "react";

const TelaPopulares = () => {
    const [ estadoMobile, setEstadoMobile ] = useState(false);

    const trocarEstado = () => {
        setEstadoMobile(estadoAnterior => !estadoAnterior);
    }


    return(
        <>
            <Header/>
            <section className={styles.secao}>
                <h1 className={styles.tituloH1}>Populares</h1>
                <div className={styles.container_flex_jogos_widescreen}>
                    <JogoItem imagem="src/assets/images/widescreen/GodOfWar2016.png" titulo = "God Of War"
                        descricao="Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado
                                a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo
                                o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os
                                deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos.
                                É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu
                                filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta."
                        lado="esquerda"
                    />
                    <JogoItem imagem="src/assets/images/widescreen/HorizonZeroDawn.png" titulo="Horizon Zero Dawn"
                        descricao="Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou 
                                as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. 
                                Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca 
                                da verdade sobre suas origens e o misterioso mundo que ela precisa salvar."
                        lado={estadoMobile ? "esquerda" : "direita"}
                    />

                    <JogoItem imagem="src/assets/images/widescreen/DaysGone.png" titulo="Days Gone"
                        descricao="Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos 
                                após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, 
                                um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. 
                                Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou 
                                arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas."
                        lado="esquerda"
                    />
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default TelaPopulares;