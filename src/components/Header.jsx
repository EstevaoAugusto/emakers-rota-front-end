import { Button, TextField } from "@mui/material"
import styles from "../style/Header.module.css"
import { useNavigate } from "react-router-dom"; 

const Header = () => {
    let navegador = useNavigate(); // trata da navegação

    const navegarPopulares = () => {
        navegador("/TelaPopulares");
    }

    const navegarPrincipal = () => {
        navegador("/TelaPrincipal");
    }

    const navegarConta = () => {
        navegador("/TelaConta");
    }

    return (   
        <body>
            <div className={styles.cabecario}>
                <img className={styles.imagemLogo} src="src\assets\images\Logo.png" onClick={navegarPrincipal}></img>
                
                {/* Conjunto de botoes. 
                    Em teoria, cada um deles leva a uma pagina do site diferente.
                    Na realidade, apenas alguns te levaram a uma pagina. */}

                <Button className={styles.botao} variant="text">Lançamentos</Button>
                <Button className={styles.botao} variant="text" onClick={navegarPopulares}>Populares</Button>
                <Button className={styles.botao} variant="text">Gêneros</Button>
                <Button className={styles.botao} variant="text">Promoçoes</Button>
                <Button className={styles.botao} variant="text" onClick={navegarConta}>Conta</Button>
                <TextField className={styles.caixaTexto} id="outlined-basic" label=""  variant="outlined" />
            </div >
        </body>
    )
}

export default Header