import { Button ,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"

const TelaPrincipal = () => {
    let navegador = useNavigate();

    const sairConta = () => {
        navegador("/")
    }

    return(
        <>
            <Header/>
                <section>
                    <Button variant="contained" onClick={sairConta}>Sair da Conta</Button>
                    
                </section>
            <Footer/>
        </>
    )
}

export default TelaPrincipal