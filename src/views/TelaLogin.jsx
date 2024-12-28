import { Button ,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginCadastro from "../assets/images/IlustracaoLoginCadastro.png";
import styles from "../style/Login.module.css";

export default function LoginUsuario(){
    let navegador = useNavigate();

    const tratarLogin = () => {
        console.log("Voce logou. Supreso?")
        navegador("/TelaConta")
    };

    const voltarCadastro = () => {
        navegador("/")
    };

    return (
        <>
            <section className={styles.secaoCadastro}>
                <div>
                    <div className={styles.conteudo}>
                        <div className={styles.container_form_flex}>
                            <h1>Login</h1>
                            <Button variant="text" onClick={voltarCadastro}>Voltar </Button>
                            <TextField required id="outlined-basic" label="Email" variant="outlined" />
                            <TextField required id="outlined-basic" label="Senha" variant="outlined" />
                            <Button variant="text" onClick={tratarLogin}>Entrar</Button>
                            <Button variant="text" >Esqueci a Senha</Button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={LoginCadastro} alt="Ilustração Login Cadastro"/>
                </div>
            </section>
        </>
    )
}