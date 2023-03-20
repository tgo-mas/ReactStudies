import { useEffect, useState } from "react";
import InputMask from "react-input-mask"
import "./CalcIMC.css";

export function CalcIMC() {
    const [imc, setImc] = useState('');
    const [statusImc, setStatusImc] = useState('');
    const [peso, setPeso] = useState(0);
    const [alt, setAlt] = useState(0);

    useEffect(() => {
        let numberImc = peso / Math.pow(alt, 2);
        setImc(numberImc);
        if(numberImc < 18.5){
            setStatusImc("Abaixo do peso");
        }else if(numberImc <= 24.9){
            setStatusImc("Peso ideal");
        }else if(numberImc <= 29.9){
            setStatusImc("Sobrepeso");
        }else if(numberImc <= 34.9){
            setStatusImc("Obesidade Grau I");
        }else if(numberImc <= 39.9){
            setStatusImc("Obesidade Grau II");
        }else if(numberImc > 40){
            setStatusImc("Obesidade Grau III");
        }
    }, [alt, peso])

    return (
        <div className="calc">
            <h2>Calculadora de IMC</h2>
            <form>
                <div className="input-box">
                    <label htmlFor="alt">Altura</label>
                    <InputMask mask="9.99" id="alt" onChange={
                        (event) => setAlt(Number.parseFloat(event.target.value))
                    }/>
                </div>
                <div className="input-box">
                    <label htmlFor="peso">Peso</label>
                    <InputMask mask="999.99" id="peso" onChange={
                        (event) => setPeso(Number.parseFloat(event.target.value))
                    } />
                </div>
            </form>
            <h3>Resultado: {imc}</h3>
            <h3>{statusImc}</h3>
        </div>
    )
}