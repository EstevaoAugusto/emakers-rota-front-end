/* O componente deve ser utilizado na seção dos jogos populares*/

import styles from "../style/Populares.module.css";

const JogoItem = ({imagem = "", titulo = "Indeterminado", descricao = "", lado}) => {

    return(
        <div className={`${styles.item}`}>
            { lado === "esquerda" ? (
                <>
                    <img src={imagem} alt={`Jogo ${titulo}`}/>
                    <div className={styles.texto}>
                        <h2 className={styles.tituloH1}>{titulo}</h2>
                        <p className={styles.fraseP}>
                            {descricao}
                        </p>
                    </div>
                </>
                ) : (
                <>
                    <div className={styles.texto}>
                        <h2 className={styles.tituloH1}>{titulo}</h2>
                        <p className={styles.fraseP}>
                            {descricao}
                        </p>
                    </div>
                        <img src={imagem} alt={`Jogo ${titulo}`}/>
                </>
                )
            }
                
        </div>
    )
}

export default JogoItem;