import { Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from "../style/Header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import IconButtonComponent from "./IconButtonComponent";

const estiloCampo1 = {
    width: '100%',
    height: '50x',
    backgroundColor: '#EFEFEF', // Fundo azul-cinza
    borderRadius: '5px', // Borda arredondada
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            boxShadow: '0 4 20px 2px rgba(0, 0, 0, 0.25)',
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: '#1e90ff', // Cor da borda ao passar o mouse
        },
        '&.Mui-focused fieldset': {
            boxShadow: '0 0 10px 2px rgba(30, 144, 255, 0.7)', // Borda azul borrada
            borderColor: '#1e90ff', // Cor da borda ao focar
        },
    }
};

const estiloCampo2 = {
    width: '100%',
    height: '50x',
    backgroundColor: '#97A4A2', // Fundo azul-cinza
    borderRadius: '5px', // Borda arredondada
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            boxShadow: '0 4 20px 2px rgba(0, 0, 0, 0.25)',
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: '#1e90ff', // Cor da borda ao passar o mouse
        },
        '&.Mui-focused fieldset': {
            boxShadow: '0 0 10px 2px rgba(30, 144, 255, 0.7)', // Borda azul borrada
            borderColor: '#1e90ff', // Cor da borda ao focar
        },
    }
}

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // estado do menu
                                                     // varia de aberto(TRUE) e fechado (FALSE)
    let navegador = useNavigate(); // trata da navegação

    const navegar = (rota) =>{ 
        navegador(rota);
    }

    const trocarMenu = () => {
        setMenuOpen((estadoAnterior) => !estadoAnterior); // troca o estado do menu
    }

    useEffect(() => { //Esse useEffect é acionado toda vez que o menuOpen trocar de estado
        if(menuOpen){ 
            document.body.style.overflow = "hidden"; // Caso esteja aberto, desabilitar scroll
            
        } else { 
            document.body.style.overflow = "auto"; // Senao, habilita scroll
        }
    }, [menuOpen]);

    return (
        <>
        <header>
            <nav className={`${styles.flexContainer} ${ menuOpen ? styles.mobile : ""}`}> {/* Quando menuOpen é verdadeiro, certas estilizações sao ativadas para garantir a responsividade*/}
                <img className={`${styles.imagemLogo} ${menuOpen ? styles.hidden: ""}`} src="src\assets\images\Logo.png" onClick={() => navegar("/TelaPrincipal")}></img>
            
                {/* Conjunto de botoes. 
                Em teoria, cada um deles leva a uma pagina do site diferente.
                Na realidade, apenas alguns te levaram a uma pagina. */}

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" sx={{ color: !menuOpen ? '#4B626C' : '#FFFFFF'}} >Lançamentos</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" sx={{ color: !menuOpen ? '#4B626C' : '#FFFFFF'}}
                        onClick={() => navegar("/TelaPopulares")}>Populares</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" 
                        sx={{ color: !menuOpen ? '#4B626C' : '#FFFFFF'}}>Gêneros</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>    
                        <Button className={styles.botao} variant="text" 
                        sx={{ color: !menuOpen ? '#4B626C' : '#FFFFFF'}}>Promoçoes</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <Button className={styles.botao} variant="text" sx={{ color: !menuOpen ? '#4B626C' : '#FFFFFF'}} 
                        onClick={() => navegar("/TelaConta")}>Conta</Button>
                    </div>

                    <div className={`${styles.exibirOpcao} ${ menuOpen ? styles.hamburguer : ""}`}>
                        <TextField className={styles.caixaTexto} id="outlined-basic" label="" variant="outlined"
                        sx={menuOpen ? estiloCampo2 : estiloCampo1}

                        slotProps={{
                            input: {
                                endAdornment:
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                            },
                          }}
                        />
                    </div>
                
                {/* Menu hambúrguer */}
                
                <div className={`${styles.menuSection} ${ menuOpen ? styles.on : ""}`}>
                    <div className={styles.menuToggle} onClick={trocarMenu}>
                        { !menuOpen ? //Caso o menu nao tenha sido aberto, deixar o icone hamburgue
                            <IconButtonComponent Icone={<MenuIcon/>}
                                border={"0"} color={"#4B626C"} backgroundColor={"none"}
                            /> 
                            : //Senao coloque o icone de fechar
                            <IconButtonComponent Icone={<CloseIcon/>}
                                border={"0"} color={"#FFFFFF"} backgroundColor={"none"} 
                            />
                        }
                    </div>
                </div>
            </nav>
        </header>
        {/* Overlay para escurecer o fundo */}
        {menuOpen && (
                <div className={styles.overlay} />
            )
        }
        </>
    )
}

export default Header