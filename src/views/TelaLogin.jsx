import { Button ,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginUsuario(){
    let navegador = useNavigate();

    const tratarLogin = () => {
        console.log("Voce logou. Supreso?")
        navegador("/TelaPrincipal")
    };

    const voltarCadastro = () => {
        navegador("/TelaPrincipal")
    };

    return (
        <>
            <Button variant="text" onClick={voltarCadastro}>Voltar </Button><br/>
            <TextField required id="outlined-basic" label="Email" variant="outlined" /><br/>
            <TextField required id="outlined-basic" label="Senha" variant="outlined" /><br/>
            <Button variant="text" onClick={tratarLogin}>Entrar</Button><br/>
        </>
    )
}