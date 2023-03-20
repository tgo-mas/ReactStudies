import { useEffect, useState } from "react"
import "./Porcentagem.css"

export function Porcentagem(){

    const [valor, setValor] = useState(0);
    const [porcentagem, setPorcentagem] = useState(0);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        setResultado(valor * (porcentagem / 100));
    }, [valor, porcentagem])

    return (
        <div>
            <label htmlFor="valor">Valor referente</label> <br />
            <input type="number" id="valor" placeholder="Valor" 
                onChange={(event) => setValor(Number.parseFloat(event.target.value))}
            /> <br />
            <label htmlFor="porc">Porcentagem</label> <br />
            <input type="number" id="porc" placeholder="Porcentagem"
                onChange={(event) => setPorcentagem(Number.parseFloat(event.target.value))}
            />%

            {(resultado !== Infinity && !isNaN(resultado) && resultado !== 0) && <h4>Resultado: {resultado}</h4>}
        </div>
    )
}