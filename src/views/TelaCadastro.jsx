import { Button ,TextField, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import styles from "../style/Cadastro.module.css"
import LoginCadastro from "../assets/images/IlustracaoLoginCadastro.png";
import estiloCampo from "../style/StyleMUI_Campo.jsx";
import estiloIcone from "../style/StyleMUI_Icone.jsx";


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
    const [houveErro, setHouveErro] = useState(false); //Controla o estado de haver ou nao erro
    const [erros, setErros] = useState(
        {
            erroNome: "", //Checa se ha algum erro no nome
            erroCPF: "", //Checa se ha algum erro no CPF
            erroEmail: "", //Checa se ha algum erro no email
            erroSenha: "", //Checa se ha algum erro no senha
            erroSenhaConfirmacao: "", //Checa se ha algum erro na senha de confirmação
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

        if(name !== "CPF"){
            setValorHTML({ ...valorHTML, [name]: value });
        } else {
            setValorHTML({ ...valorHTML, [name]: value.toString().replace(/\D/g, '') });
        }
    };

    let navegador = useNavigate(); // trata da navegação

    const navegarLogin = () => {
        navegador("/TelaLogin");
        
    };        

    const handleRegistrar = () => {
        setHouveErro(false); // O sistema assume que o usuario fez tudo conforme o esperado
        
        // Inicializando o objeto de erros
        let novosErros = {
            erroNome: "",
            erroCPF: "",
            erroEmail: "",
            erroSenha: "",
            erroSenhaConfirmacao: "",
        };
    
        // Verificando os campos e populando os erros
        if (!valorHTML.Nome) novosErros.erroNome = "Esta caixa não foi preenchida corretamente";
        if (!valorHTML.CPF) novosErros.erroCPF = "Esta caixa não foi preenchida corretamente";
        if (!valorHTML.Email) novosErros.erroEmail = "Esta caixa não foi preenchida corretamente";
        if (!valorHTML.Senha) novosErros.erroSenha = "Esta caixa não foi preenchida corretamente";
        if (!valorHTML.SenhaConfirmacao) novosErros.erroSenhaConfirmacao = "Esta caixa não foi preenchida corretamente";
    
        if (valorHTML.CPF && valorHTML.CPF.length < 12) {
            novosErros.erroCPF = "Seu CPF é menor do que 12 dígitos.";
        }
    
        if (valorHTML.Email && !validarEmail(valorHTML.Email)) {
            novosErros.erroEmail = "Este email é inválido.";
        }
    
        if (valorHTML.Senha && valorHTML.Senha.length < 8) {
            novosErros.erroSenha = "A senha informada é menor do que 8 dígitos. Digite outra.";
        }
    
        if (valorHTML.Senha !== valorHTML.SenhaConfirmacao) {
            novosErros.erroSenhaConfirmacao = "A senha de confirmação não é igual à senha anterior.";
        }
    
        // Atualizando o estado com os novos erros
        setErros(novosErros);
    
        // Verificando se houve algum erro
        const houveErrosDetectados = Object.values(novosErros).some(erro => erro !== "");
        setHouveErro(houveErrosDetectados);
    
        // Realiza o cadastro se não houver erros
        if (!houveErrosDetectados) {
            setUsuario(valorHTML);
            window.alert("Usuário cadastrado com sucesso!");
            navegador("/TelaConta");
        }

    };    

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
                    <h1 className={styles.textoH1}>Registrar</h1>
                
                    <div>
                        <TextField required helperText={erros.erroNome} label="Nome" name="Nome" 
                        value={valorHTML.Nome} onChange={handleChange} variant="outlined"
                        sx={estiloCampo} error={houveErro && (erros.erroNome !== "")}/>
                    </div>

                    <div>
                        <TextField required helperText={erros.erroEmail} label="Email" name="Email" 
                        value={valorHTML.Email} onChange={handleChange} variant="outlined" 
                        sx={estiloCampo} error={houveErro && (erros.erroEmail !== "")}/>
                    </div>

                    <div>
                        <TextField required helperText={erros.erroCPF} label="CPF" name="CPF"
                        value={valorHTML.CPF} onChange={handleChange} variant="outlined" slotProps={{ htmlInput: { maxLength: 12,  /* Limita o número de caracteres para 50*/ }}} 
                        sx={estiloCampo} error={houveErro && (erros.erroCPF !== "")}/>
                    </div>
                    

                    <div>
                        <TextField required helperText={erros.erroSenha} type="password" label="Senha" name="Senha" 
                        value={valorHTML.Senha} onChange={handleChange} variant="outlined"
                        sx={estiloCampo} error={houveErro && (erros.erroSenha !== "")}/>
                    </div>
                    
                    <div>
                        <TextField required helperText={erros.erroSenhaConfirmacao} type="password" label="SenhaConfirmacao"
                        name="SenhaConfirmacao" value={valorHTML.SenhaConfirmacao} onChange={handleChange} variant="outlined"
                        sx={estiloCampo} error={houveErro && (erros.erroSenhaConfirmacao !== "")}/>
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