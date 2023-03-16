import './Contador.css'
import {useState} from "react"

export function Contador(){

    const [numero, setNumero] = useState(0);

    function dec(){
        const newNumero = numero - 1;
        setNumero(newNumero);
    }

    function inc(){
        const newNumero = numero + 1;
        setNumero(newNumero);
    }

    function maisDez(){
        const newNumero = numero + 10;
        setNumero(newNumero);
    }

    function maisCem(){
        const newNumero = numero + 100;
        setNumero(newNumero);
    }

    function multTres(){
        const newNumero = numero * 3;
        setNumero(newNumero);
    }

    function divDois(){
        const newNumero = numero / 2;
        setNumero(newNumero);
    }

    function menosCinq(){
        const newNumero = numero - 50;
        setNumero(newNumero);
    }

    function menosCinco(){
        const newNumero = numero - 5;
        setNumero(newNumero);
    }

    return (
        <div className='contador'>
            <h2>{numero}</h2>
            <div>
                <button onClick={dec}>-1</button>
                <button onClick={inc}>+1</button>
            </div>
            <div>
                <button onClick={maisDez}>+10</button>
                <button onClick={maisCem}>+100</button>
            </div>
            <div>
                <button onClick={multTres}>*3</button>
                <button onClick={divDois}>/2</button>
            </div>
            <div>
                <button onClick={menosCinq}>-50</button>
                <button onClick={menosCinco}>-5</button>
            </div>
        </div>
    )
}