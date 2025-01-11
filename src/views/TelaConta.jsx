import Header from "../components/Header.jsx";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import estiloIconeCarrinho from "../style/StyleMUI_IconeCarrinho.jsx";
import { Button, Stack, IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "../style/Conta.module.css";
import { useNavigate } from "react-router-dom";

const locaisGamesPosters = [
    {   
        caminho: "src/assets/images/posters/BattleForBikiniBottom.png", 
        key: "Jogo Spongebob Squarepants: Battle For Bikini Bottom Rehydrated",
        nota: "100/100",
    },
    { 
        caminho: "src/assets/images/posters/Mars.png", 
        key: "Jogo Deliver Us Mars" ,
        nota: "95/100",
    },
    { 
        caminho: "src/assets/images/posters/GodOfWar2016.png", 
        key: "Jogo God Of War (2018)" ,
        nota: "75/100",
    },
    { 
        caminho: "src/assets/images/posters/DeathStranding.png", 
        key: "Jogo Death Strading",
        nota: "Adicionar Avaliação",
    },
];



export default function TelaConta() {
    let navegador = useNavigate(); // trata da navegação

    const navegar = (rota) => {
        navegador(rota)
    }

    const handleAlterarDados = () => {
        console.log("Alterando dados...")
    }

    const handleExcluirDados = () => {
        console.log("Excluindo dados...")
    }

    return (
        <>
            <Header/>
            <section className={styles.grid_container}>
                    <div className={styles.txt_item}>
                    {/* Seção que conta as informações do usuário */}
                    
                    <div className={styles.conjuntoTextos}>
                        <h1 className={styles.textoH1}>Olá, &lt;&lt;Nome do Usuário&gt;&gt;</h1><br/>
                        <h2 className={styles.textoH2}>Seu email é nomeusuario@email.com</h2><br/>
                        <h2 className={styles.textoH2}>Seu CPF é 123.456.789-00</h2><br/><br/>
                    </div>

                    <div className={styles.conjuntoBotoes}>
                    {/* Pilha de botoes da conta*/}
                        <Stack spacing={2} direction={"column"} alignItems={"flex-start"} margin={"2rem"} width={"auto"} >
                            <Button variant="contained" 
                                sx={
                                    { 
                                        color:'#FBF6F0', 
                                        backgroundColor: '#4B626C',
                                        width: '170px',
                                    }
                                }
                                onClick={() => navegar("/TelaAdministrador")} endIcon={<CreateIcon/>}>
                                    Alterar Dados
                            </Button>

                            <Button variant="contained" 
                                sx={
                                    { 
                                        color:'#FBF6F0', 
                                        backgroundColor: '#4B626C',
                                        width: '170px',
                                    }
                                } 
                                onClick={handleExcluirDados} endIcon={<DeleteIcon/>}>
                                    Excluir Conta
                            </Button>

                            <Button variant="contained" sx={
                                { 
                                    color:'#FBF6F0', 
                                    backgroundColor: '#4B626C', 
                                    opacity: '50%',
                                    width: '170px',
                                }
                            } 
                            onClick={() => navegar("/")}>
                                Tela do Admin
                            </Button>
                        </Stack>
                    </div>
                    
                </div>

                <div className={styles.jogos_adicionados}>
                    <h3 className={styles.textoH3}>Jogos adquiridos:</h3>
                    <div className={styles.grid_container_jogos}>
                        { //Codigo que coloca os jogos do usuario
                            locaisGamesPosters.map((local) => {
                                    return(
                                        <div key={local.key}> 
                                            <img src={local.caminho} alt={local.key}></img>
                                            <p>{local.nota}</p>
                                        </div>
                                    )
                                }
                            )
                        }
                        
                    
                        <div >
                            <IconButton sx={estiloIconeCarrinho} onClick={() => {navegar("/TelaCarrinho")}} aria-label="Abrir carrinho de compras">
                                <AddShoppingCartOutlinedIcon/>
                            </IconButton>
                        </div>
                    </div>    
                </div>
            </section>
        </>
    )
}