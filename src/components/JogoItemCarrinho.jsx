import styles from "../style/JogoCarrinho.module.css";


const JogoItemCarrinho = () => {

    const jogos = [
        { caminhoImagem: "src/assets/images/posters/BattleForBikiniBottom.png", 
            nomeJogo: "Sponge Bob: Battle for Bikini Bottom", 
            preco: 299.00,
            plataformas: "PC"
        }, 
        { caminhoImagem: "src/assets/images/posters/DeathStranding.png", 
            nomeJogo: "Death Stranding",
            preco: 299.00,
            plataformas: "PC",
        },
    ];
    
    const precoTotal = jogos.reduce((soma, produto) => soma + produto.preco, 0); //calcula o preco total dos jogos

    return(
        <section className={styles.styleContainerFlexJogoItem}>
            {jogos.map((jogo) => {
                return(
                    <div className={styles.styleContainerGrid} key={jogo.nomeJogo}>
                        <div>
                            <div className={styles.styleContainerFlex}>
                                <p>{jogo.nomeJogo}</p>
                                <p>Plataforma: {jogo.plataformas}</p>
                                <p className={styles.fontTamanho}>R${jogo.preco.toFixed(2)}</p>
                            </div>
                        </div>
                        <div>
                            <img src={jogo.caminhoImagem} alt={`Jogo ${jogo.nomeJogo}`} className={styles.styleImagem} />
                        </div>
                    </div>
                )            
            })}
            <div className={styles.styleContainerGridPrecoTotal}>
                <div>
                    <p className={styles.fontTamanho}>R${precoTotal.toFixed(2)}</p>
                </div>
                <div>
                    <p className={styles.fontTamanho}>Total</p>
                </div>
            </div>
        </section>
    )
};

export default JogoItemCarrinho;