import { Button ,TextField } from "@mui/material";
import "../style/Cadastro.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect  } from "react";

const Cadastro = () => {
    const [usuario, setUsuario] = useState(
        {
            Nome: "",
            CPF: "",
            Email: "",
            Senha: "",
            SenhaConfirmacao: "",
        }
    )

    let navegador = useNavigate();

    
    
    const navegarLogin = () => {
        navegador("/TelaLogin")
    };

    return(
        <>
            <h1>Registrar</h1>
            <TextField required id="outlined-basic" label="Nome" value={usuario.Nome} variant="outlined"/><br/>
            <TextField required id="outlined-basic" label="CPF" value={usuario.CPF} variant="outlined" /><br/>
            <TextField required id="outlined-basic" label="Email" value={usuario.Email} variant="outlined" /><br/>
            <TextField required id="outlined-basic" label="Senha" value={usuario.Senha} variant="outlined" /><br/>
            <TextField required id="outlined-basic" label="Confirmar Senha" value={usuario.SenhaConfirmacao} variant="outlined" /><br/>
            

            <Button variant="contained">Cadastrar</Button><br/>
            <Button variant="text" onClick={navegarLogin}>Fazer Login</Button>
        </>
    )
}

export default Cadastro;