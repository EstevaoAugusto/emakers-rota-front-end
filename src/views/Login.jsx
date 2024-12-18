import { Button ,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginUsuario(){
    let navegador = useNavigate();

    const tratarLogin = () => {
        console.log("Voce logou. Supreso?")
    };

    const voltarCadastro = () => {
        navegador("/")
    };

    return (
        <>
            <Button variant="text" onClick={voltarCadastro}>Voltar </Button><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Senha" variant="outlined" /><br/>
            <Button variant="text" onClick={tratarLogin}>Entrar</Button><br/>
        </>
    )
}