import { useState } from "react"
import "./Sorteio.css"

export function Sorteio(){

    const [number, setNumber] = useState('')

    function sortear(){
        const min = Number.parseInt(document.getElementById('min').value);
        const max = Number.parseInt(document.getElementById('max').value);
        if(!min && !max){
            setNumber(Math.floor(Math.random() * 100));
        }else if(!min){
            setNumber(Math.floor(Math.random() * max));
        }else if(!max){
            setNumber(Math.floor(Math.random() * 90 + min));
        }else{
            setNumber(Math.floor((Math.random() * (max - min) + min)))
        }
    }

    return(
        <div className="container">
            <h1>Sorteio</h1>
            <div className={"number " + (number % 2 == 0 ? "par" : "impar")}>
                {number}
            </div>
            <div className="minmax">
                <label htmlFor="min">Mínimo</label>
                <input type="number" id="min" placeholder="0" />
                <label htmlFor="max">Máximo</label>
                <input type="number" id="max" placeholder="100" />
            </div>
            <button type="button" onClick={sortear}>Sortear</button>
        </div>
    )
}