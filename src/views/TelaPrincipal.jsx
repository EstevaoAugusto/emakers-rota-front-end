import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../style/Principal.module.css";
import Carrossel from "../components/Carrossel.jsx";

const TelaPrincipal = () => {
    let navegador = useNavigate();

    const sairConta = () => {
        navegador("/")
    }

    return(
        <>
            <Header/>
                <section>
                    <div id="secao1">

                    </div>
                    <div id="secao2" className={styles.conteudo}>
                        <h1>Lançamentos</h1>
                        <Carrossel/>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default TelaPrincipal