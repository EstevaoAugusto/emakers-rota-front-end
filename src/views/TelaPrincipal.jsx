import { Button ,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const TelaPrincipal = () => {
    let navegador = useNavigate();

    const sairConta = () => {
        navegador("/")
    }

    return(
        <>
            <Header/>
            <Button variant="contained" onClick={sairConta}>Sair da Conta</Button>
        </>
    )
}

export default TelaPrincipal