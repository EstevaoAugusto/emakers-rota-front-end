import Header from "../components/Header.jsx"
import styles from "../style/Administrador.module.css";
import { Button ,TextField } from "@mui/material";

export default function TelaAdministrador(){

    return (
        <>
            <Header/>

            <section>
                <main className={styles.containerGrid}>
                    <form action="" className={`${styles.formulario} ${styles.formularioCor1}`}>
                        <h1 className={styles.tituloH1}>Cadastrar Jogo</h1>
                        <TextField required  label="Titulo do Jogo" name="TituloJogo"  variant="outlined"/>
                        <TextField required  label="Genero" name="Genero"  variant="outlined"/>
                        <TextField required  label="Descricao" name="Descricao"  variant="outlined"/>
                        <Button variant="contained">Inserir Imagem</Button>
                        <Button variant="contained">Cadastrar</Button>
                    </form>
                    <form action="" className={`${styles.formulario} ${styles.formularioCor2}`}>
                        <h1 className={styles.tituloH1}>Remover Jogo</h1>
                        <TextField required  label="Titulo do Jogo ou ID" name="Titulo do Jogo ou ID"  variant="outlined"/>
                        <Button variant="contained">Remover</Button>
                    </form>
                    <form action="" className={`${styles.formulario} ${styles.formularioCor1}`}>
                        <h1 className={styles.tituloH1}>Editar Jogo</h1>
                        <TextField required  label="Titulo do Jogo" name="TituloJogo"  variant="outlined"/>
                        <TextField required  label="Genero" name="Genero"  variant="outlined"/>
                        <TextField required  label="Descricao" name="Descricao"  variant="outlined"/>
                        <Button variant="contained">Inserir Imagem</Button>
                        <Button variant="contained">Cadastrar</Button>
                    </form>
                </main>
            </section>
        </>
    )
}