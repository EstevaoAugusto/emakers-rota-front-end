import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../style/Jogo.module.css";
import { useNavigate } from "react-router-dom";
import IconButtonComponent from "../components/IconButtonComponent.jsx";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";

export default function TelaJogo(){
    let navegador = useNavigate(); // trata da navegação

    const navegar = (rota) => {
        navegador(rota)
    }

    return (
        <>
            <Header/>
            <section>
                <main>
                    <div>
                        <div className={styles.containerGrid}>
                            <div className={styles.positionRelative}>
                                <div className={styles.precoDescontoTotal}>98%</div>
                                <img src="src/assets/images/widescreen/GodOfWar2016.png" alt="Capa do Videogame God Of War(2016)" />
                                <div className={styles.precoDesconto}>-45%</div>
                                <div className={styles.precoAtual}>R$ 119,95</div>
                            </div>
                            <div className={styles.textoConteudo}>
                                <h1>God of War</h1>
                                <p> 
                                    Com a vingança contra os deuses do Olimpo em um passado distante, 
                                    Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. 
                                    É nesse mundo duro e implacável que ele deve lutar para sobreviver... 
                                    e ensinar seu filho a fazer o mesmo.
                                </p>
                                <Button variant="contained" sx={{ backgroundColor: '#FCFAFA', color: '#4B626C'}} onClick={() => navegar("/TelaCarrinho")} endIcon={<ShoppingCartIcon/>}>Adicionar ao Carrinho</Button>
                                <Button variant="contained" sx={{ backgroundColor: '#FCFAFA', color: '#4B626C', opacity: '50%'}} endIcon={<ShoppingCartIcon/>}>Solicitar Reembolso</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <section>
                <div>
                    <IconButtonComponent Icone={<ShoppingCartOutlinedIcon/>} onClick={() => navegar("/TelaCarrinho")}
                    color="#FFFFFF" border="3px solid white" backgroundColor="#4B626C" width="4rem" height="4rem"/>
                </div>
            </section>
            <Footer/>
        </>
    )
}