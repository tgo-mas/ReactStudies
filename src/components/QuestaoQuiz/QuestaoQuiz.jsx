import { useState } from "react";
import "./QuestaoQuiz.css"

const questao = {
    pergunta: "Qual é a capital do Seridó?",
    alternativas: [
        "Parelhas",
        "Currais Novos",
        "Caicó",
        "Jucurutu"
    ],
    correta: "Caicó"
}

export function QuestaoQuiz() {
    const [status, setStatus] = useState("pendente");
    const [tentativas, setTentativas] = useState(2);

    function responder(evt) {
        let resp = evt.target.innerHTML;
        if (questao.correta === resp) {
            setStatus("acerto");
        } else {
            setStatus("erro");
        }
    }

    if (status === "pendente") {
        return (
            <div>
                <h3>{questao.pergunta}</h3>
                <ol type="a">
                    {questao.alternativas.map(
                        (alt, i) => <li key={i} className="alternativa" onClick={responder}>{alt}</li>
                    )}
                </ol>
                <h5>Tentativas: {tentativas}</h5>
            </div>
        );
    } else if (status === "acerto") {
        return (
            <div>
                <h3>Parabéns!</h3>
                <p>Você acertou!!</p>
            </div>
        );
    } else if (status === "erro") {
        if (tentativas > 0) {
            return (
                <div>
                    <h3>Tente novamente</h3>
                    <p>Você errou!</p>
                    <button onClick={() => {
                        setStatus("pendente");
                        setTentativas(tentativas - 1)
                    }
                    }>Tente novamente</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Game over!</h3>
                    <p>Você esgotou seu número de tentativas!</p>
                </div>
            )
        }
    }
}