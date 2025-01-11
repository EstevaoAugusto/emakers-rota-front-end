/* O componente deve ser utilizado na seção dos jogos populares*/

import styles from "../style/Populares.module.css";

const JogoItem = ({ posicao, imagem = "", titulo = "Indeterminado", descricao = "", lado, estilo}) => {

    return(
        <div className={`${styles.item}`}>
            { lado === "esquerda" ? (
                <>
                    <div className={styles.position_relative}>
                        <div className={styles.posicaoPopularidade1}>{posicao}</div>
                        <img src={imagem} alt={`Jogo ${titulo}`}/>
                    </div>
                    <div className={styles.texto}>
                        <h2 >{titulo}</h2>
                        <p className={styles.fraseP}>
                            {descricao}
                        </p>
                    </div>
                </>
                ) : (
                <>
                    <div className={styles.texto}>
                        <h2 >{titulo}</h2>
                        <p className={styles.fraseP}>
                            {descricao}
                        </p>
                    </div>
                    <div className={styles.position_relative}>
                        <div className={styles.posicaoPopularidade1}>{posicao}</div>
                        <img src={imagem} alt={`Jogo ${titulo}`}/>
                    </div>
                </>
                )
            }
                
        </div>
    )
}

export default JogoItem;