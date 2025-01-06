import styles from "../style/Footer.module.css";
import { Icon } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom"; 

const Footer = () => {
    let navegador = useNavigate(); // trata da navegação

    const navegar = (rota) => {
        navegador(rota);
    }

    return ( 
        <footer className={styles.estiloFooter}>
            
            <div className={styles.containerGrid}>
                <div className={styles.exibirFlex1}>
                    <img className={styles.imagemLogo} src="src\assets\images\Logo.png"></img>
                </div>

                <div className={styles.exibirFlex2}>
                    <h1 className={styles.tituloH1}>Game Dame</h1>
                    <p>Seu próximo jogo começa aqui</p>
                </div>

                <div className={styles.exibirFlex3}>
                    <h1 className={styles.tituloH1}>Explorar</h1>
                    <p className={`${styles.textoRedirecionavel}`} onClick={() => { navegar("/TelaPrincipal")}}>Início</p>
                    <p className={`${styles.textoRedirecionavel}`} onClick={() => { navegar("/TelaPopulares")}}>Populares</p>
                    <p className={`${styles.textoRedirecionavel}`} onClick={() => { navegar("/TelaConta")}}>Conta</p>
                </div>

                <div className={styles.exibirFlex4}>
                    <h1 className={styles.tituloH1}>Contato</h1>
                    <p><Icon component={EmailIcon}/>gamegamedame@teste.com</p>
                    <p><Icon component={CallIcon}/>(99) 9 9999-9999</p>
                    <p><Icon component={LocationOnIcon}/>Shopping X, Lavras - MG </p>
                </div>
            </div>
            <p className={styles.footerTxt}>2024 Game Dame | By Emakers Júnior</p>
            
        </footer>
    )
}

export default Footer;