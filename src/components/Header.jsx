import { Button, TextField } from "@mui/material"
import styles from "../style/Header.module.css"


const Header = () => {

    return (   
        <body className={styles.corpo}>
            <div className={styles.cabecario}>
                <img className={styles.imagemLogo} src="src\assets\images\Logo.png"></img>
                <Button className={styles.botao} variant="text">Lançamentos</Button>
                <Button className={styles.botao} variant="text">Populares</Button>
                <Button className={styles.botao} variant="text">Gêneros</Button>
                <Button className={styles.botao} variant="text">Promoçoes</Button>
                <Button className={styles.botao} variant="text">Conta</Button>
                <TextField className={styles.caixaTexto} id="outlined-basic" label=""  variant="outlined" />
            </div >
        </body>
    )
}

export default Header