import {useState} from "react"
import "./Cadastro.css"

export function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [resumo, setResumo] = useState('');

    function obterNome(evt){
        const campo = evt.target;
        const valor = campo.value;
        setNome(valor);
    }

    function obterEmail(evt){
        const campo = evt.target;
        const valor = campo.value;
        setEmail(valor);
    }

    function obterResumo(evt){
        setResumo(evt.target.value);
    }

    return(
        <div>
            <strong>Formulário de Cadastro</strong>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterNome} />
            <br />
            <input type="text" placeholder="Digite seu email" onChange={obterEmail}/>
            <br />
            <textarea placeholder="Digite seu resumo" onChange={obterResumo} />
            <br />
            <p><strong>{nome}</strong>
            <br />
            <strong>{email}</strong>
            <br />
            <strong>{resumo}</strong></p>
        </div>
    )

}