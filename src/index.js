import { createRoot } from "react-dom/client"
import {App} from "./App"
import "./style.css"

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <App/>
)

// let desc = 'React!'

// root.render(<section>
//     <h1>React é top!</h1>
//     <img src="https://picsum.photos/200" alt="descricao"/>
//     <p>Vamos aprender <br/> <b>{desc}</b></p>
// </section>)/