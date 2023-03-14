import { Titulo } from "./components/Título.jsx"
import { createRoot } from "react-dom/client"
import {Blog} from "./components/Blog/Blog"
import {Footer} from "./components/Footer"
import "./style.css"

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <section>
        <Titulo></Titulo>
        <Blog></Blog>
        <Footer></Footer>
    </section>
)

// let desc = 'React!'

// root.render(<section>
//     <h1>React é top!</h1>
//     <img src="https://picsum.photos/200" alt="descricao"/>
//     <p>Vamos aprender <br/> <b>{desc}</b></p>
// </section>)