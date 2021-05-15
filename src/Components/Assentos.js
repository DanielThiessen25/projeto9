import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Assentos() { 
    const [sessao, setSessao] = useState([]);
    const {idSessao} = useParams();

    useEffect(() => {
        const requisicao = axios.get(" https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/" + idSessao + "/seats");
        alert("ENTROU NO USE EFFECT");
        requisicao.then(resposta => {
            console.log(resposta.data);
            setSessao(resposta.data);
        });
    }, []);

    function verificarCadeira(condicao){
        if(condicao == true){
            return("disponivel");
        }
        else{
            return("indisponivel");
        }
    }

    function mapearSala(array){
        if(array != null){
            return(
            array.map(item => 
                <div className={"cadeira "+ verificarCadeira(item.isAvailable)}>{item.name}</div>
            )
            );
            }
    }

    return (
        <>
            <div className="rodape">
                <div className="caixaEscolhido">
                    <img src={sessao.movie.posterURL} className="posterEscolhido" />
                </div>
                <div className="infoEscolhido">
                    <p>{sessao.movie.title}</p>
                    <p>{sessao.day.weekday + " - "+ sessao.name }</p>
                </div>
            </div>
            <div className="conteudo">
                <div className="tituloRota">Selecione o(s) assento(s)</div>
                <div className="container">
                    <div className="mapaSala">

                        {mapearSala(sessao.seats)}

                        
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
                        <input placeholder="Digite seu nome..." ></input>

                    </div>


                    <div className="comprador">
                        <p>CPF do comprador:</p>
                        <input placeholder="Digite seu cpf..." ></input>
                    </div>

                    <Link to="/sucesso" className="botaoLaranja"><div >Reservar assento(s)</div></Link>


                </div>

            </div>
        </>

    );
}