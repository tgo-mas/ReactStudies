import { useState } from "react"
import { frutas } from "../../data/frutas.js"

export function Pesquisa(){

    let [resultados, setResultados] = useState([]);
    
    function getFrutas(evt){
        let frutasResult = frutas.filter((fruta) => fruta.nome.toLowerCase().includes(evt.target.value.toLowerCase()));

        if(evt.target.value !== ""){
            setResultados(frutasResult.map((fruta) => {
                return(
                    <div className="fruta">
                        <h3>{fruta.nome}</h3>
                    </div>
                )
            }));
        }else{
            setResultados([]);
        }
    }

    return (
        <div>
            <input className="pesquisa" type="text" placeholder="Pesquise sua fruta.." onChange={getFrutas}/>
            {resultados}
        </div>
    )
}
