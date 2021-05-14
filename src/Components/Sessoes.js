import { Link } from "react-router-dom";

export default function Sessoes() {
    return (
        <>
            <div className="rodape">
                <div className="caixaEscolhido">
                    <img src="imgs/2067.png" className="posterEscolhido" />
                </div>
                <div className="infoEscolhido">
                    <p>Enola Holmes</p>
                   
                </div>
            </div>
            <div className="conteudo">
                <div className="tituloRota">Selecione o horário</div>
                <div className="container">
                    < div className="opcao">
                        <p>Quinta-feira - 24/06/2021</p>
                        <div className="horarios">
                            <Link to="/assentos"><div className="opcaoHorario">15:00</div></Link>
                            <Link to="/assentos"><div className="opcaoHorario">19:00</div></Link>
                        </div>
                    </div>
                    < div className="opcao">
                        <p>Quinta-feira - 24/06/2021</p>
                        <div className="horarios">
                            <div className="opcaoHorario">15:00</div>
                            <div className="opcaoHorario">19:00</div>
                        </div>
                    </div>
                    < div className="opcao">
                        <p>Quinta-feira - 24/06/2021</p>
                        <div className="horarios">
                            <div className="opcaoHorario">15:00</div>
                            <div className="opcaoHorario">19:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}