import { Button ,TextField } from "@mui/material";
import "../style/Cadastro.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect  } from "react";

const Cadastro = () => {
    const [usuario, setUsuario] = useState(     // Informações de um usuário inicialmente vazio 
        {                                       // É preciso realizar o cadastro de um usuario
            Nome: "",
            CPF: "",
            Email: "",
            Senha: "",
            SenhaConfirmacao: "",
        }
    )

    let navegador = useNavigate(); // trata da navegação

    

    const navegarLogin = () => {
        navegador("/TelaLogin")
    };

    return(
        <>
            <h1>Registrar</h1>
            {/* Conjunto de caixas de textos a serem preenchidas. 
                O valor digitado nelas resultara na criação de um novo usuário.*/}
            <TextField required id="outlined-basic" label="Nome" value={usuario.Nome} variant="outlined"/><br/>
            <TextField required id="outlined-basic" label="CPF" value={usuario.CPF} variant="outlined" /><br/>
            <TextField required id="outlined-basic" label="Email" value={usuario.Email} variant="outlined" /><br/>
            <TextField required id="outlined-basic" label="Senha" value={usuario.Senha} variant="outlined" /><br/>
            <TextField required id="outlined-basic" label="Confirmar Senha" value={usuario.SenhaConfirmacao} variant="outlined" /><br/>
            
            {/* Cadastra um novo usuário.*/}
            <Button variant="contained">Cadastrar</Button><br/>
            {/* Realiza login de usuário*/}
            <Button variant="text" onClick={navegarLogin}>Fazer Login</Button>
        </>
    )
}

export default Cadastro;