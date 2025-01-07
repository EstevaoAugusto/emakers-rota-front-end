import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../style/Jogo.module.css";
import { Button } from "@mui/material";

export default function TelaJogo(){

    return (
        <>
            <Header/>
            <section>
                <main>
                    <div>
                        <div className={styles.containerGrid}>
                            <img src="src/assets/images/widescreen/GodOfWar2016.png" alt="Capa do Videogame God Of War(2016)" />
                            <div className={styles.textoConteudo}>
                                <h1>God of War</h1>
                                <p> 
                                    Com a vingança contra os deuses do Olimpo em um passado distante, 
                                    Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. 
                                    É nesse mundo duro e implacável que ele deve lutar para sobreviver... 
                                    e ensinar seu filho a fazer o mesmo.
                                </p>
                                <Button variant="contained">Adicionar ao Carrinho</Button>
                                <Button variant="contained" disabled>Solicitar Reembolso</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <Footer/>
        </>
    )
}