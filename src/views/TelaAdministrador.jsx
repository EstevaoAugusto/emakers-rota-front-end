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
                        <TextField required sx={{ 
                            width: '70%', 
                            height: 'auto', 
                            backgroundColor: '#EFEFEF',
                            borderRadius: '5px',
                        }
                            } label="Titulo do Jogo" name="TituloJogo"  variant="outlined"/>

                        <TextField required sx={{
                            backgroundColor: '#EFEFEF',
                            borderRadius: '5px',
                        }} label="Genero" name="Genero"  variant="outlined"/>

                        <TextField required sx={
                            { width: '80%',
                              backgroundColor: '#EFEFEF',
                              borderRadius: '5px',
                            }
                            } multiline rows={6} label="Descricao" name="Descricao"  variant="outlined"/>

                        <Button sx={{ backgroundColor: '#FFFFFF', color: '#97A4A2', }} variant="contained">Inserir Imagem</Button>
                        
                        <Button sx={{ backgroundColor: '#FFFFFF', color: '#606060', }} variant="contained">Cadastrar</Button>
                    </form>

                    <form action="" className={`${styles.formulario} ${styles.formularioCor2}`}>
                        <h1 className={styles.tituloH1}>Remover Jogo</h1>
                        
                        <TextField required sx={{ backgroundColor: '#4B626C', borderRadius: '5px',}} label="Titulo do Jogo ou ID" name="Titulo do Jogo ou ID"  variant="outlined"/>
                        
                        <Button sx={{ backgroundColor: '#4B626C', color: '#F3F3F3',}} variant="contained">Remover</Button>
                    </form>
                    <form action="" className={`${styles.formulario} ${styles.formularioCor1}`}>
                        <h1 className={styles.tituloH1}>Editar Jogo</h1>
                        
                        <TextField required 
                        sx={ { width: '70%', height: 'auto', backgroundColor: '#EFEFEF', borderRadius: '5px',}} 
                        label="Titulo do Jogo" name="TituloJogo"  variant="outlined"/>
                        
                        <TextField required 
                        sx={{ backgroundColor: '#EFEFEF', borderRadius: '5px', }} 
                        label="Genero" name="Genero"  variant="outlined"/>
                        
                        <TextField required multiline sx={
                            { width: '80%', backgroundColor: '#EFEFEF', borderRadius: '5px',}}
                             rows={6}  label="Descricao" name="Descricao"  variant="outlined"/>
                             
                        <Button sx={{ backgroundColor: '#FFFFFF', color: '#97A4A2', }} 
                        variant="contained">Inserir Imagem</Button>
                        
                        <Button sx={{ backgroundColor: '#FFFFFF', color: '#606060', }} 
                        variant="contained">Cadastrar</Button>
                    </form>
                </main>
            </section>
        </>
    )
}