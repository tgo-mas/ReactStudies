import { useState } from "react";
import InputMask from "react-input-mask"
import "./CalcIMC.css";

export function CalcIMC() {
    const [imc, setImc] = useState('');
    const [statusImc, setStatusImc] = useState('');

    function calcImc(){
        const alt = Number.parseFloat(document.getElementById("alt").value);
        const peso = Number.parseFloat(document.getElementById("peso").value);
        console.log(alt + peso)
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
    }

    return (
        <div className="calc">
            <h2>Calculadora de IMC</h2>
            <form>
                <div className="input-box">
                    <label htmlFor="alt">Altura</label>
                    <InputMask mask="9.99" id="alt" />
                </div>
                <div className="input-box">
                    <label htmlFor="peso">Peso</label>
                    <InputMask mask="999.99" id="peso" />
                </div>
                <button type="button" onClick={calcImc}>Calcular</button>
            </form>
            <h3>Resultado: {imc}</h3>
            <h3>{statusImc}</h3>
        </div>
    )
}