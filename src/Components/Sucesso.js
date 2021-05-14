import { Link } from "react-router-dom";


export default function Sucesso(){
    return(
        <div className="conteudo">
        <div className="confirmacaoPedido">Pedido feito <br /> com sucesso!</div>

        <div className="resumo">
            <h2>Filme e sessão</h2>
            <h3>Enola Holmes</h3>
            <h3>24/06/2021  15:00</h3>
        </div>


        <div className="resumo">
            <h2>Ingressos</h2>
            <h3>Assento 16</h3>
            <h3>Assento 20</h3>
        </div>

        <div className="resumo">
            <h2>Comprador</h2>
            <h3>Nome: Joãozinho</h3>
            <h3>CPF: 123.456.789-10</h3>
        </div>


        <Link to="/"><div className="botaoLaranja">Voltar para Home</div></Link>

        </div>

    );
}