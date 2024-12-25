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
        <header className={styles.flexContainer}>
            <div>
                <img className={styles.imagemLogo} src="src\assets\images\Logo.png" onClick={navegarPrincipal}></img>
            </div>
            {/* Conjunto de botoes. 
                Em teoria, cada um deles leva a uma pagina do site diferente.
                Na realidade, apenas alguns te levaram a uma pagina. */}

            <div>
                <Button className={styles.botao} variant="text">Lançamentos</Button>
            </div>
            
            <div>
                <Button className={styles.botao} variant="text" onClick={navegarPopulares}>Populares</Button>
            </div>
            
            <div>
                <Button className={styles.botao} variant="text">Gêneros</Button>
            </div>
            
            <div>
                <Button className={styles.botao} variant="text">Promoçoes</Button>
            </div>
            
            <div>
                <Button className={styles.botao} variant="text" onClick={navegarConta}>Conta</Button>
            </div>
            
            <div>
                <TextField className={styles.caixaTexto} id="outlined-basic" label=""  variant="outlined" />
            </div>
        </header>
    )
}

export default Header