import { Button ,TextField, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import LoginCadastro from "../assets/images/IlustracaoLoginCadastro.png";
import styles from "../style/Cadastro.module.css";
import estiloCampo from "../style/StyleMUI_Campo.jsx";
import estiloIcone from "../style/StyleMUI_Icone.jsx";

export default function LoginUsuario(){
    let navegador = useNavigate();

    const tratarLogin = () => {
        window.alert("Nenhum usuário está cadastrado no momento. Crie uma conta.");
    };

    const navegar = (rota) => {
        navegador(rota);
    }

    return (
        <>
            <section className={styles.containerGeral}>
                <form className={styles.containerFormulario}>
                    <h1 className={styles.textoH1}>Login</h1>

                    <div>
                        <TextField required label="Email" name="Email" 
                        variant="outlined" 
                        sx={estiloCampo}/>
                    </div>

                    <div>
                        <TextField required type="password" label="Senha" name="Senha" 
                        variant="outlined"
                        sx={estiloCampo}/>
                    </div>              
                    

                    {/* Realiza login de usuário*/} 
                    <div className={styles.opcaoCadastrar}>
                        <IconButton onClick={tratarLogin} sx={estiloIcone} >
                            <ArrowForwardIcon/>
                        </IconButton>
                    </div>

                    <div className={styles.containerLogin}>
                        <div>
                            <Button variant="text" onClick={() => navegar("/")}>Criar Conta </Button>
                        </div>

                        <div>
                            <Button variant="text" onClick={() => navegar("/TelaRecuperarConta")}>Esqueceu a Senha? </Button>
                        </div>
                    </div>
                </form>

                <div className={styles.img_container}>
                    <img src={LoginCadastro} alt="Ilustração Login Cadastro"/>
                </div>
            </section>
        </>
    )
}