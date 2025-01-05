import styles from "../style/Footer.module.css";
import { useNavigate } from "react-router-dom"; 

const Footer = () => {
    let navegador = useNavigate(); // trata da navegação

    const navegar = (rota) => {
        navegar(rota);
    }

    return ( 
        <footer className={styles.estiloFooter}>
            
            <div className={styles.container}>
                <div>
                    <img className={styles.imagemLogo} src="src\assets\images\Logo.png"></img>
                </div>

                <div>
                    <h1 className={styles.tituloH1}>Game Dame</h1>
                    <p>Seu próximo jogo começa aqui</p>
                </div>

                <div>
                    <h1 className={styles.tituloH1}>Explorar</h1>
                    <p className={`${styles.textoRedirecionavel}`} onClick={() => { navegar("/TelaPrincipal")}}>Início</p>
                    <p className={`${styles.textoRedirecionavel}`} onClick={() => { navegar("/TelaPopulares")}}>Populares</p>
                    <p className={`${styles.textoRedirecionavel}`} onClick={() => { navegar("/TelaConta")}}>Conta</p>
                </div>

                <div>
                    <h1 className={styles.tituloH1}>Contato</h1>
                    <p>gamegamedame@teste.com</p>
                    <p>(99) 9 9999-9999</p>
                    <p>Shopping X, Lavras - MG </p>
                </div>
            </div>
            <p className={styles.footerTxt}>2024 Game Dame | By Emakers Júnior</p>
            
        </footer>
    )
}

export default Footer;