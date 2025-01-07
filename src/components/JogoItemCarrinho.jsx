
const JogoItemCarrinho = () => {



    const styleContainerGrid = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    };

    const styleImagem = {
        height: '250px',
        width: '190px',
    };

    const styleContainerFlex = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const jogos = [
        { caminhoImagem: "src/assets/images/posters/BattleForBikiniBottom.png", 
            nomeJogo: "Sponge Bob: Battle for Bikini Bottom", 
            preco: 299,
            plataformas: "PC"
        }, 
        { caminhoImagem: "src/assets/images/posters/DeathStranding.png", 
            nomeJogo: "Death Stranding",
            preco: 299,
            plataformas: "PC",
        },
    ];
    
    const precoTotal = jogos.reduce((soma, produto) => soma + produto.preco, 0);

    return(
        <section>
            {jogos.map((jogo) => {
                return(
                    <div style={styleContainerGrid} key={jogo.nomeJogo}>
                        <div>
                            <div style={styleContainerFlex}>
                                <p>{jogo.nomeJogo}</p>
                                <p>Plataforma: {jogo.plataformas}</p>
                                <p>R${jogo.preco.toFixed(2)}</p>
                            </div>
                        </div>
                        <div>
                            <img src={jogo.caminhoImagem} alt={`Jogo ${jogo.nomeJogo}`} style={styleImagem} />
                        </div>
                    </div>
                )            
            })}
            <div style={styleContainerGrid}>
                <div>
                    <p>R${precoTotal.toFixed(2)}</p>
                </div>
                <div>
                    <p>Total</p>
                </div>
            </div>
        </section>
    )
};

export default JogoItemCarrinho;