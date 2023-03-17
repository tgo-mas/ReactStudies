import { useState } from "react"
import { frutas } from "../../data/frutas.js"
import "./Pesquisa.css"

export function Pesquisa() {

    let [resultados, setResultados] = useState([]);

    function getFrutas(evt) {
        let frutasResult = frutas.filter(
            (fruta) => fruta.nome.toLowerCase().includes(evt.target.value.toLowerCase()));

        setResultados(frutasResult.map((fruta) => {
            return (
                <div className="fruta">
                    <img src={fruta.imagem} alt="fruta" />
                    <h3>{fruta.nome}</h3>
                </div>
            )
        }));
    }

    return (
        <div>
            <input className="pesquisa" type="text" placeholder="Pesquise sua fruta.." onChange={getFrutas} />
            <div className="lista-frutas">
                {resultados}
            </div>
        </div>
    )
}
