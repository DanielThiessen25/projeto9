import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

        requisicao.then(resposta => {
            setFilmes(resposta.data);
        });
    }, []);


    return (
        <div className="conteudo">
            <div className="tituloRota">Selecione o filme</div>
            <div className="container">

                {filmes.map(item =>
                    <div className="caixa">
                        <Link to={"/sessoes/" + item.id}><img src={item.posterURL} className="poster" /></Link>
                    </div>
                )}

            </div>

        </div>


    );
}