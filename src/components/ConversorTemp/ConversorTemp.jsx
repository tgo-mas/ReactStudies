import { useEffect, useState } from "react";
import "./ConversorTemp.css";


// Efeitos = ações secundárias


export function ConversorTemp() {
    const [tempC, setTempC] = useState(0);
    const [tempF, setTempF] = useState(0);
    const [tempK, setTempK] = useState(0);

    // Exercício: Adicionar conversão para Kelvin no efeito
    // e mostrar no return. K = C - 273


    useEffect(() => {
        // Quando a tempC for alterada essa função/efeito
        // será executado automaticamente
        const resultadoConversao = tempC * 1.8 + 32;
        const resultadoKelvin = tempC - 273;
        setTempF(resultadoConversao);
        setTempK(resultadoKelvin);
    }, [tempC]); // array de dependencias


    return (
        <div>
            <input
                type="number"
                placeholder="Temperatura em C"
                onChange={(evento) => setTempC(evento.target.value)}
            />
            <p>Valor em celsius: {tempC} °C</p>
            <p>Temperatura em Fahrenheit: {tempF} °F</p>
            <p>Temperatura em Kelvin: {tempK} K</p>
        </div>
    );
}



