import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Item(props) {

    const [classe, setClasse] = useState("disponivel");

    function verificarCadeira(condicao) {
        if (condicao == true) {
            return (classe);
        }
        else {
            return ("indisponivel");
        }
    }

    function selecionar(lugar) {
        if (lugar.isAvailable == true) {
            if (classe == "disponivel") {
                setClasse("selecionado");
                props.acrescentar(props.item);
            }
            else if (classe == "selecionado") {
                setClasse("disponivel");
                props.remover(props.item);
            }

        }
        else {
            alert("Esse assento não está disponível!");
        }
    }


    return (
        <div className={"cadeira " + verificarCadeira(props.item.isAvailable)} onClick={() => selecionar(props.item)}>{props.item.name}</div>
    );
}