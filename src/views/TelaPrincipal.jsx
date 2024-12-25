import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../style/Principal.module.css";

const TelaPrincipal = () => {
    let navegador = useNavigate();

    const sairConta = () => {
        navegador("/")
    }

    return(
        <>
            <Header/>
                <section id="secao1">

                </section>
                <section id="secao2" className={styles.conteudo}>
                    <Button variant="contained" onClick={sairConta}>Sair da Conta</Button>

                </section>
            <Footer/>
        </>
    )
}

export default TelaPrincipal