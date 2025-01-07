import Header from "../components/Header.jsx";
import styles from "../style/Carrinho.module.css";
import JogoItemCarrinho from "../components/JogoItemCarrinho.jsx";
import { useState } from "react";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Button } from "@mui/material";

export default function TelaCarrinho() {
    const [pagamento, setPagamento] = useState("PIX");

    const handleChange = (event) => {
        setPagamento(event.target.value);
    };

    const estiloH1_1 = {
        fontSize: "36px",
        margin: "10px 0",
        color: "#FBF6F0",
      };
    
      const estiloH1_2 = {
        fontSize: "36px",
        margin: "10px 0",
        color: "#4B626C",
      };

    return (
        <>
            <Header/>
            <section>
                <main>
                    <div className={styles.containerGrid}>
                        <div className={styles.containerFlex1}>
                            <h1 style={estiloH1_1}>Carrinho de Compras</h1>
                            <JogoItemCarrinho/>
                        </div>
                        <div className={styles.containerFlex2}>
                            <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Método de Pagamento</FormLabel>
                                    <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={pagamento}
                                    >
                                        <img src="src/assets/images/PagamentoPix.png" alt="Icone do PIX, uma forma de pagamento" className={styles.imagemPix}/>
                                        <FormControlLabel value="PIX" control={<Radio />} label="PIX" />
                                    </RadioGroup>
                            </FormControl>
                            <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Método de Pagamento</FormLabel>
                                    <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={pagamento}
                                    >
                                        <FormControlLabel value="PIX" control={<Radio />} label="Eu aceito os termos e condições" />
                                    </RadioGroup>
                            </FormControl>
                            <Button variant="text" >Finalizar Compra</Button>

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}