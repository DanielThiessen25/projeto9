import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Item from "./Item";

export default function Assentos() {
    const [sessao, setSessao] = useState();
    const [pedido, setPedido] = useState([]); 
    const [numeros, setNumeros] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const { idSessao } = useParams();

    useEffect(() => {
        const requisicao = axios.get(" https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/" + idSessao + "/seats");
        alert("ENTROU NO USE EFFECT");
        requisicao.then(resposta => {
            console.log(resposta.data);
            setSessao(resposta.data);
        });
    }, []);


    function mapearSala() {
        if (sessao != null) {
            return (
                sessao.seats.map(item =>
                    <Item item = {item} acrescentar={acrescentar} remover={remover} />
                )
            );
        }
    }

    function renderizarRodape() {
        if(sessao != null){
        return (
            <div className="rodape">
                <div className="caixaEscolhido">
                    <img src={sessao.movie.posterURL} className="posterEscolhido" />
                </div>
                <div className="infoEscolhido">
                    <p>{sessao.movie.title}</p>
                    <p>{sessao.day.weekday + " - " + sessao.name}</p>
                </div>
            </div>
        );
    }
    }

    function acrescentar(item){
            let atualizador = [...pedido, item.id];
            setPedido(atualizador);
            setNumeros([...numeros, item.name]);
    }

    function remover(item){
        let retirar = 0;
        let atualizador = [...pedido];
        for(let i = 0; i< atualizador.length; i++){
            if(atualizador[i]   === item.id){
                retirar = i;
            }
        }
        atualizador.splice(retirar, 1);
        let atualizadorNumeros = [...numeros];
        atualizadorNumeros.splice(retirar, 1);
        setNumeros(atualizadorNumeros);
        setPedido(atualizador);
    }

    function reservar(){
        let reserva = {ids:pedido, name: nome, cpf: cpf};
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', reserva);

        requisicao.then(console.log(reserva));
    }




    return (
        <>
            {renderizarRodape()}

            <div className="conteudo">
                <div className="tituloRota">Selecione o(s) assento(s)</div>
                <div className="container">
                    <div className="mapaSala">

                        {mapearSala()}


                    </div>
                    <div className="legenda">
                        <div className="legendaIcone">
                            <div className="cadeira selecionado"></div>
                            <p>Selecionado</p>
                        </div>
                        <div className="legendaIcone">
                            <div className="cadeira disponivel"></div>
                            <p>Disponível</p>
                        </div>
                        <div className="legendaIcone">
                            <div className="cadeira indisponivel"></div>
                            <p>Indisponível</p>
                        </div>

                    </div>

                    <div className="comprador">
                        <p>Nome do comprador:</p>
                        <input placeholder="Digite seu nome..."  value={nome} onChange={e => setNome(e.target.value)} ></input>

                    </div>


                    <div className="comprador">
                        <p>CPF do comprador:</p>
                        <input placeholder="Digite seu cpf..." value={cpf} onChange={e => setCpf(e.target.value)}></input>
                    </div>

                    <Link to={{pathname:"/sucesso", state :{sessao: sessao, pedido:numeros, nome:nome, cpf:cpf},}}  className="botaoLaranja" onClick={reservar}><div >Reservar assento(s)</div></Link>


                </div>

            </div>
        </>

    );
}