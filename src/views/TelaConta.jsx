import Header from "../components/Header.jsx";
import { Button, Stack } from "@mui/material";
import styles from "../style/Conta.module.css";
import { useNavigate } from "react-router-dom";

export default function TelaConta() {
    let navegador = useNavigate();

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
            <section >
                    <h1>Olá, Nome do Usuário</h1><br/>
                    <h2>Seu email é nomeusuario@email.com</h2><br/>
                    <h2>Seu CPF é 123.456.789-00</h2><br/><br/>

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

                </section>
        </>
    )
}