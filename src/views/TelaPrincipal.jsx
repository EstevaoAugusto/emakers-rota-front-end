import IconButtonComponent from "../components/IconButtonComponent.jsx";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../style/Principal.module.css";
import Carrossel from "../components/Carrossel.jsx";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImageSlider from "../components/ImageSlider.jsx";

const TelaPrincipal = () => {
    let navegador = useNavigate();

    const navegar = (rotas) => {
        navegador(rotas)
    }

    return(
        <>
            <Header/>
                <section className={styles.secao}>
                    <div id="secao1" className={styles.conteudo1}>
                        <ImageSlider/>
                    </div>
                    <div id="secao2" className={styles.conteudo2}>
                        <h1 className={styles.tituloH1}>Lançamentos</h1>
                        <Carrossel/>
                        <IconButtonComponent Icone={<ShoppingCartOutlinedIcon/>} onClick={() => {navegar("/TelaCarrinho")}} 
                        color="#FFFFFF" border="3px solid white" backgroundColor="#4B626C" width="4rem" height="4rem"/>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default TelaPrincipal