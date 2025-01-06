import Header from "../components/Header.jsx";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import estiloIconeCarrinho from "../style/StyleMUI_IconeCarrinho.jsx";
import { Button, Stack, IconButton } from "@mui/material";
import styles from "../style/Conta.module.css";
import { useNavigate } from "react-router-dom";

const postersGames = "../src/assets/images/postersGames";

export default function TelaConta() {
    let navegador = useNavigate(); // trata da navegação

    const sairConta = () => {
        navegador("/")
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
                    
                    <h1 className={styles.textoH1}>Olá, Nome do Usuário</h1><br/>
                    <h2 className={styles.textoH2}>Seu email é nomeusuario@email.com</h2><br/>
                    <h2 className={styles.textoH2}>Seu CPF é 123.456.789-00</h2><br/><br/>
                    
                    
                    {/* Pilha de botoes da conta*/}
                    <Stack 
                        spacing={2}
                        direction={"column"}
                        alignItems={"flex-start"}
                        margin={"2rem"}
                    >
                    <Button  variant="contained" onClick={handleAlterarDados}>Alterar Dados</Button>
                    <Button  variant="contained" onClick={handleExcluirDados}>Excluir Conta</Button>
                    <Button  disabled onClick={sairConta}>Tela do Admin</Button>
                    <Button  variant="contained" onClick={sairConta}>Sair da Conta</Button>
                </Stack>
                </div>

                <div className={styles.jogos_adicionados}>
                    <h2 className={styles.textoH2}>Jogos adquiridos:</h2>
                    <div className={styles.grid_container_jogos}>
                        <div>
                            <img src="src\assets\images\posters\BattleForBikiniBottom.png" alt="Jogo Spongebob Squarepants: Battle For Bikini Bottom Rehydrated"></img>
                            <p>100/100</p>
                        </div>
                        <div>
                            <img src="src\assets\images\posters\Mars.png" alt="Jogo Deliver Us Mars" />
                            <p>95/100</p>
                        </div>
                        <div>
                            <img src="src\assets\images\posters\GodOfWar2016.png" alt="Jogo God Of War (2016)" />
                            <p>75/100</p>
                        </div>
                        <div>
                            <img src="src\assets\images\posters\DeathStranding.png" alt="Jogo Death Strading"></img>
                            <p>Adicionar Avaliação</p>
                        </div>
                        {/* Cadastra um novo usuário.*/}
                    
                        <div >
                            <IconButton sx={estiloIconeCarrinho}>
                                <AddShoppingCartOutlinedIcon/>
                            </IconButton>
                        </div>
                    </div>    
                </div>
            </section>
        </>
    )
}