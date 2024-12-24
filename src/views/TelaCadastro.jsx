import { Button ,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../style/Cadastro.module.css"
import LoginCadastro from "../assets/images/IlustracaoLoginCadastro.png";

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
            {/* Conjunto de caixas de textos a serem preenchidas. 
                O valor digitado nelas resultara na criação de um novo usuário.*/}
            <section className={styles.secaoCadastro}>
                <div>
                <h1>Registrar</h1><br/>
                <TextField required id="outlined-basic" label="Nome" value={usuario.Nome} variant="outlined"/><br/>
                
                <TextField required id="outlined-basic" label="CPF" value={usuario.CPF} variant="outlined" /><br/>
                <TextField required id="outlined-basic" label="Email" value={usuario.Email} variant="outlined" /><br/>
                <TextField required id="outlined-basic" label="Senha" value={usuario.Senha} variant="outlined" /><br/>
                <TextField required id="outlined-basic" label="Confirmar Senha" value={usuario.SenhaConfirmacao} variant="outlined" /><br/>
                {/* Cadastra um novo usuário.*/}
                <Button variant="contained">Cadastrar</Button><br/>
                {/* Realiza login de usuário*/}
                <Button variant="text" onClick={navegarLogin}>Fazer Login</Button>
                </div>

                <div>
                    <img src={LoginCadastro} alt="Ilustração Login Cadastro"/>
                </div>
            </section>
        </>
    )
}

export default Cadastro;