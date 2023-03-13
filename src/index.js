import { Titulo } from "./components/Título.jsx"
import { Mensagem } from "./components/Mensagem.jsx"
import { createRoot } from "react-dom/client"
import "./style.css"

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <section>
        <Titulo></Titulo>
        <Mensagem></Mensagem>
    </section>
)


// let desc = 'React!'

// root.render(<section>
//     <h1>React é top!</h1>
//     <img src="https://picsum.photos/200" alt="descricao"/>
//     <p>Vamos aprender <br/> <b>{desc}</b></p>
// </section>)