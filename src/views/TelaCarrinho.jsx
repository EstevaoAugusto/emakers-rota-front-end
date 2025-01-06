import Header from "../components/Header.jsx";
import styles from "../style/Carrinho.module.css";

export default function TelaCarrinho() {

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

                        </div>
                        <div className={styles.containerFlex2}>
                            <h1 style={estiloH1_2} >Método de Pagamento</h1>

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}