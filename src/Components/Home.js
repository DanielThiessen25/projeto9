import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="conteudo">
                <div className="tituloRota">Selecione o filme</div>
                <div className="container">
                    <div className="caixa">
                        <img src="imgs/2067.png" className="poster" />
                    </div>
                    <div className="caixa">
                        <Link to="/sessoes"><img src="imgs/2067.png" className="poster" /></Link>
                    </div>
                    <div className="caixa">
                        <img src="imgs/2067.png" className="poster" />
                    </div>
                    <div className="caixa">
                        <img src="imgs/2067.png" className="poster" />
                    </div>
                    <div className="caixa">
                        <img src="imgs/2067.png" className="poster" />
                    </div>
                    <div className="caixa">
                        <img src="imgs/2067.png" className="poster" />
                    </div>
                    <div className="caixa">
                        <img src="imgs/2067.png" className="poster" />
                    </div>
                    <div className="caixa">
                        <img src="imgs/2067.png" className="poster" />
                    </div>
                </div>

            </div>


    );
}