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
                    <p>Quinta-Feira - 15:00</p>
                </div>
            </div>
            <div className="conteudo">
                <div className="tituloRota">Selecione o(s) assento(s)</div>
                <div className="container">
                    <div className="mapaSala">
                        <div className="cadeira">01</div>
                        <div className="cadeira">02</div>
                        <div className="cadeira">03</div>
                        <div className="cadeira">04</div>
                        <div className="cadeira">05</div>
                        <div className="cadeira">06</div>
                        <div className="cadeira">07</div>
                        <div className="cadeira">08</div>
                        <div className="cadeira">09</div>
                        <div className="cadeira">10</div>
                        <div className="cadeira">01</div>
                        <div className="cadeira">02</div>
                        <div className="cadeira">03</div>
                        <div className="cadeira">04</div>
                        <div className="cadeira">05</div>
                        <div className="cadeira">06</div>
                        <div className="cadeira">07</div>
                        <div className="cadeira">08</div>
                        <div className="cadeira">09</div>
                        <div className="cadeira">10</div>
                        <div className="cadeira">01</div>
                        <div className="cadeira">02</div>
                        <div className="cadeira">03</div>
                        <div className="cadeira">04</div>
                        <div className="cadeira">05</div>
                        <div className="cadeira">06</div>
                        <div className="cadeira">07</div>
                        <div className="cadeira">08</div>
                        <div className="cadeira">09</div>
                        <div className="cadeira">10</div>
                        <div className="cadeira">01</div>
                        <div className="cadeira">02</div>
                        <div className="cadeira">03</div>
                        <div className="cadeira">04</div>
                        <div className="cadeira">05</div>
                        <div className="cadeira">06</div>
                        <div className="cadeira">07</div>
                        <div className="cadeira">08</div>
                        <div className="cadeira">09</div>
                        <div className="cadeira">10</div>
                        <div className="cadeira">01</div>
                        <div className="cadeira">02</div>
                        <div className="cadeira">03</div>
                        <div className="cadeira">04</div>
                        <div className="cadeira">05</div>
                        <div className="cadeira">06</div>
                        <div className="cadeira">07</div>
                        <div className="cadeira">08</div>
                        <div className="cadeira">09</div>
                        <div className="cadeira">10</div>
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

                    <Link to="/sucesso"><div className="botaoLaranja">Reservar assento(s)</div></Link>


                </div>

            </div>
        </>

    );
}