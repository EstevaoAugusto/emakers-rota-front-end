import Header from "../components/Header.jsx";
import styles from "../style/Carrinho.module.css";
import JogoItemCarrinho from "../components/JogoItemCarrinho.jsx";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

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
                                        <FormControlLabel 
                                            value="PIX" 
                                            control={<Radio />} 
                                            label={
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <img 
                                                        src="src/assets/images/PagamentoPix.png" 
                                                        alt="Icone do PIX, uma forma de pagamento" 
                                                        className={styles.imagemPix}
                                                    />
                                                    PIX
                                                </div>
                                            } />
                                    </RadioGroup>
                            </FormControl>
                            <div className={styles.linhaDivisora2}></div>
                            <FormControl>
                                    <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={pagamento}
                                    >
                                        <FormControlLabel value="PIX" control={<Radio />} label="Eu aceito os termos e condições" />
                                    </RadioGroup>
                            </FormControl>
                            <Button variant="text" sx={
                                {
                                    backgroundColor: '#4B626C',
                                    color: '#FBF6F0',
                                    width: '190px',
                                }
                            }
                            endIcon={<ShoppingCartIcon/>}>Finalizar Compra</Button>

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}