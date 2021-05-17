import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sessoes() {

    const { idFilme } = useParams();
    const history = useHistory();
    const [dados, setDados] = useState([]);


    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/" + idFilme + "/showtimes");
        requisicao.then(resposta => {
            console.log(resposta.data);
            setDados(resposta.data);
        });
    }, []);


    function mapear(array) {
        if (array != null) {
            return (
                array.map(item =>
                    <div className="opcao">
                        <p>{item.weekday + " - " + item.date}</p>
                        <div className="horarios">
                            {item.showtimes.map(hora =>
                                <Link to={"/assentos/" + hora.id} className="opcaoHorario"><div>{hora.name}</div></Link>
                            )}
                        </div>
                    </div>
                )
            );
        }
    }


    return (
        <>
            <div className="rodape">
                <div className="caixaEscolhido">
                    <img src={dados.posterURL} className="posterEscolhido" />
                </div>
                <div className="infoEscolhido">
                    <p>{dados.title}</p>

                </div>
            </div>
            <div className="voltar" onClick={() => { history.goBack() }}><ion-icon name="arrow-back-circle-outline"></ion-icon></div>
            <div className="conteudo">
                <div className="tituloRota">Selecione o horário</div>
                <div className="container">

                    {console.log(dados.days)}
                    {mapear(dados.days)}

                </div>
            </div>
        </>
    );
}