import { Link } from "react-router-dom";
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Sucesso() {
    const { handle } = useParams;
    const location = useLocation();
    const objeto = location.state;
    const [sucesso, setSucesso] = useState();
    const { idSucesso } = useParams();

    return (
        <div className="conteudo">
            <div className="confirmacaoPedido">Pedido feito <br /> com sucesso!</div>

            <div className="resumo">
                <h2>Filme e sessão</h2>
                <h3>{objeto.sessao.movie.title}</h3>
                <h3>{objeto.sessao.day.date + " - " + objeto.sessao.name}</h3>
            </div>

            <div className="resumo">
                <h2>Ingressos</h2>
                {objeto.pedido.map(ingresso =>
                    <h3>{"Assento " + ingresso}</h3>
                )}
            </div>

            <div className="resumo">
                <h2>Comprador</h2>
                <h3>{"Nome: " + objeto.nome}</h3>
                <h3>{"CPF: " + objeto.cpf}</h3>
            </div>

            <Link to="/" className="link"><div className="botaoLaranja">Voltar para Home</div></Link>
        </div>
    );
}