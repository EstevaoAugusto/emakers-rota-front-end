import { Button, TextField } from "@mui/material"
import styles from "../style/Header.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // estado do menu
    let navegador = useNavigate(); // trata da navegação

    const navegar = (rota) =>{
        navegador(rota);
    }

    const trocarMenu = () => {
        setMenuOpen((estadoAnterior) => !estadoAnterior);
    }

    useEffect(() => {
        if(menuOpen){
            document.body.classList.add(styles.scrollCancelled);
        } else {
            document.body.classList.remove(styles.scrollCancelled);
        }
    }, [menuOpen]);

    return (   
        <header>
            <nav className={`${styles.flexContainer} ${ menuOpen ? styles.mobile : ""}`}>
                <img className={`${styles.imagemLogo} ${menuOpen ? styles.hidden: ""}`} src="src\assets\images\Logo.png" onClick={() => navegar("/TelaPrincipal")}></img>
            
                {/* Conjunto de botoes. 
                Em teoria, cada um deles leva a uma pagina do site diferente.
                Na realidade, apenas alguns te levaram a uma pagina. */}

                
                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" >Lançamentos</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" onClick={() => navegar("/TelaPopulares")}>Populares</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" >Gêneros</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>    
                        <Button className={styles.botao} variant="text">Promoçoes</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" onClick={() => navegar("/TelaConta")}>Conta</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <TextField className={styles.caixaTexto} id="outlined-basic" label=""  variant="outlined" />
                    </div>
                
                {/* Menu hambúrguer */}
                
                <div className={`${styles.menuSection} ${ menuOpen ? styles.on : ""}`}>
                    <div className={styles.menuToggle} onClick={trocarMenu}>
                        <div className={`${styles.line1} ${ menuOpen ? styles.changed : "" }`}> </div>
                        <div className={`${styles.line2} ${ menuOpen ? styles.changed : "" }`}> </div>
                        <div className={`${styles.line3} ${ menuOpen ? styles.changed : "" }`}> </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header