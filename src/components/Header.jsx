import { Button, TextField } from "@mui/material"
import styles from "../style/Header.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Header = () => {
    let navegador = useNavigate(); // trata da navegação

    const navegar = (rota) =>{
        navegador(rota);
    }

    return (   
        <header>
            <nav className={`${styles.flexContainer}`}>
                <img className={styles.imagemLogo} src="src\assets\images\Logo.png" onClick={() => navegar("/TelaPrincipal")}></img>
            
                {/* Conjunto de botoes. 
                Em teoria, cada um deles leva a uma pagina do site diferente.
                Na realidade, apenas alguns te levaram a uma pagina. */}

            
                <div className={styles.exibirOpcao}>
                    <Button className={styles.botao} variant="text" >Lançamentos</Button>
                </div>
                <div className={styles.exibirOpcao}>
                    <Button className={styles.botao} variant="text" onClick={() => navegar("/TelaPopulares")}>Populares</Button>
                </div>
                <div className={styles.exibirOpcao}>
                    <Button className={styles.botao} variant="text" >Gêneros</Button>
                </div>
                <div className={styles.exibirOpcao}>    
                    <Button className={styles.botao} variant="text">Promoçoes</Button>
                </div>
                <div className={styles.exibirOpcao}>
                    <Button className={styles.botao} variant="text" onClick={() => navegar("/TelaConta")}>Conta</Button>
                </div>
                <div className={styles.exibirOpcao}>
                    <TextField className={styles.caixaTexto} id="outlined-basic" label=""  variant="outlined" />
                </div>
            
                <div className={styles.menuToggle}>
                    <div className={styles.line}> </div>
                    <div className={styles.line}> </div>
                    <div className={styles.line}> </div>
                </div>
            </nav>
        </header>
    )
}

export default Header