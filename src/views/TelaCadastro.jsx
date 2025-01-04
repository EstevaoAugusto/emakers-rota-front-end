import { Button ,TextField, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import styles from "../style/Cadastro.module.css"
import LoginCadastro from "../assets/images/IlustracaoLoginCadastro.png";

const estiloCampo = {
    backgroundColor: '#EFEFEF', // Fundo azul-cinza
    borderRadius: '5px', // Borda arredondada
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            boxShadow: '0 4 20px 2px rgba(0, 0, 0, 0.25)',
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: '#1e90ff', // Cor da borda ao passar o mouse
        },
        '&.Mui-focused fieldset': {
            boxShadow: '0 0 10px 2px rgba(30, 144, 255, 0.7)', // Borda azul borrada
            borderColor: '#1e90ff', // Cor da borda ao focar
        },
    }
}

const estiloIcone = {
    width: '60px',            // Largura do botão
    height: '60px',           // Altura do botão
    padding: '10px',          // Padding interno do botão
    fontSize: '30px',         // Tamanho do ícone
    color: '#4B626C',           // Cor do ícone
    borderRadius: '50%',      // Botão redondo
    '&:hover': {
        backgroundColor: '#77a39a', // Cor de fundo ao passar o mouse
    }
}

const Cadastro = () => {

    const [usuario, setUsuario] = useState(     // Informações de um usuário inicialmente vazio 
        {                                       // É preciso realizar o cadastro de um usuario
            Nome: "",
            CPF: "",
            Email: "",
            Senha: "",
            SenhaConfirmacao: "",
        }
    );
    const [erros, setErros] = useState(
        {
            erroNome: "",
            erroCPF: "",
            erroEmail: "",
            erroSenha: "",
            erroSenhaConfirmacao: "",
        }
    );
    const [valorHTML, setValorHTML] = useState(     
        {                                       
            Nome: "",
            CPF: "",
            Email: "",
            Senha: "",
            SenhaConfirmacao: "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValorHTML({ ...valorHTML, [name]: value });
    };

    let navegador = useNavigate(); // trata da navegação

    const navegarLogin = () => {
        navegador("/TelaLogin");
        
    };        

    const handleRegistrar = () => {
        const novosErros = { Nome: "", CPF: "", Email: "", Senha: "", SenhaConfirmacao: "",};

        if (!valorHTML.Nome || !valorHTML.CPF || !valorHTML.Email || !valorHTML.Senha || !valorHTML.SenhaConfirmacao) {
            window.alert("Uma das caixas de texto não foi preenchida");
            return;
        }
        if(valorHTML.CPF.length < 12){
            novosErros.CPF = "Seu cpf é menor do que 12 digitos";
        } 
        if(!validarEmail(valorHTML.Email)){
            novosErros.Email = "Este email é invalido."
        }
        if(valorHTML.Senha.length < 8){
            novosErros.Senha = "A senha informada é menor do que 8 digitos. Digite outro.";
        }
        if(valorHTML.Senha != valorHTML.SenhaConfirmacao){
            novosErros.SenhaConfirmacao = "A senha de confirmação não é igual a senha anterior.";
        }

        setErros(novosErros);

        // Verifica se há erros antes de registrar
        const temErros = Object.values(novosErros).some((erro) => erro !== "");
        if (!temErros) {
            // Simula o cadastro do usuário
            setUsuario(valorHTML);
            console.log(usuario)
            window.alert("Usuário cadastrado com sucesso!");
            navegador("/TelaConta");
        }
    }

    const validarEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return regex.test(email);
    }

    return(
        <>
            {/* Conjunto de caixas de textos a serem preenchidas. 
                O valor digitado nelas resultara na criação de um novo usuário.*/}
            <section className={styles.containerGeral}>
                <form className={styles.containerFormulario}>
                    <h1>Registrar</h1>
                
                    <div>
                        <TextField required helperText={erros.erroNome} label="Nome" name="Nome" 
                        value={valorHTML.Nome} onChange={handleChange} variant="outlined"
                        sx={estiloCampo}/>
                    </div>

                    <div>
                        <TextField required helperText={erros.erroEmail} label="Email" name="Email" 
                        value={valorHTML.Email} onChange={handleChange} variant="outlined" 
                        sx={estiloCampo}/>
                    </div>

                    <div>
                        <TextField required helperText={erros.erroCPF} label="CPF" name="CPF" 
                        value={valorHTML.CPF} onChange={handleChange} variant="outlined" slotProps={{ htmlInput: { maxLength: 12,  /* Limita o número de caracteres para 50*/ }}} 
                        sx={estiloCampo}/>
                    </div>
                    

                    <div>
                        <TextField required helperText={erros.erroSenha} type="password" label="Senha" name="Senha" 
                        value={valorHTML.Senha} onChange={handleChange} variant="outlined"
                        sx={estiloCampo}/>
                    </div>
                    
                    <div>
                        <TextField required helperText={erros.erroSenhaConfirmacao} type="password" label="SenhaConfirmacao"
                        name="SenhaConfirmacao" value={valorHTML.SenhaConfirmacao} onChange={handleChange} variant="outlined"
                        sx={estiloCampo}/>
                    </div>

                    {/* Cadastra um novo usuário.*/}
                    
                    <div className={styles.opcaoCadastrar}>
                        <IconButton onClick={handleRegistrar} sx={estiloIcone} >
                            <ArrowForwardIcon/>
                        </IconButton>
                    </div>
                    {/* Realiza login de usuário*/}
                    
                    <div className={styles.opcaoEntrar}>
                        <Button variant="text" onClick={navegarLogin}>Fazer Login</Button>
                    </div>
                </form>

                <div className={styles.img_container}>
                    <img src={LoginCadastro} alt="Ilustração Login Cadastro"/>
                </div>
            </section>
        </>
    )
}

export default Cadastro;