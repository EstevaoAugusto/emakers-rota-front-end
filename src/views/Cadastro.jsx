import { Button ,TextField } from "@mui/material";
import "../style/Cadastro.css"
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    let navegador = useNavigate();

    const tratarCadastro = () => {
        console.log("Voce cadastrou. Supreso?")
    };

    const navegarLogin = () => {
        navegador("/Login")
    };

    return(
        <>
            <h1>Registrar</h1>
            <TextField id="outlined-basic" label="Nome" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="CPF" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Senha" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Confirmar Senha" variant="outlined" /><br/>
            

            <Button variant="contained" onClick = {tratarCadastro} >Cadastrar</Button><br/>
            <Button variant="text" onClick={navegarLogin}>Fazer Login</Button>
        </>
    )
}

export default Cadastro;