import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../style/Populares.module.css";

const TelaPopulares = () => {

    return(
        <>
            <Header/>
            <section>
                <h1 className={styles.tituloH1}>Populares</h1>
                <div className={styles.container_flex_jogos_widescreen}>
                    <div className={styles.item}>
                        <img src="src\assets\images\widescreen\GodOfWar2016.png" alt="Jogo God Of War" srcset="" />
                        <div className={styles.texto_container}>
                            <h1 className={styles.tituloH1}>God of War</h1>
                            <p className={styles.fraseP}>
                                Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado
                                a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo
                                o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os
                                deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos.
                                É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu
                                filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.texto_container}>
                            <h1 className={styles.tituloH1}>Horizon Zero Dawn</h1>
                            <p className={styles.fraseP}>
                                Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou 
                                as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. 
                                Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca 
                                da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.
                            </p>
                        </div>
                        <img src="src\assets\images\widescreen\HorizonZeroDawn.png" alt="Jogo Horizon Zero Dawn" srcset="" />
                    </div>
                    
                    <div className={styles.item}>
                        <img src="src\assets\images\widescreen\DaysGone.png" alt="Jogo Days Gone" srcset="" />
                        <div className={styles.texto_container}>
                            <h1 className={styles.tituloH1}>Days Gone</h1>
                            <p className={styles.fraseP}>
                            Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos 
                            após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, 
                            um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. 
                            Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou 
                            arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default TelaPopulares;