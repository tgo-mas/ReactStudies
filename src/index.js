import { createRoot } from "react-dom/client"
// import { Titulo } from "./components/Título/Título.jsx"
// import { Blog } from "./components/Blog/Blog"
// import { Footer } from "./components/Footer/Footer"
// import { Mensagem } from "./components/Mensagem/Mensagem"
// import { Postagem } from "./components/Postagem/Postagem"
// import { Musics } from "./components/Musics/Musics"
import {ListMusic} from "./components/ListMusic/ListMusic"
import {Task} from "./components/Task/Task"
import "./style.css"

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <div>
        {/* <Titulo></Titulo>
        <Mensagem></Mensagem>
        <hr />
        <Postagem></Postagem>
        <hr />
        <Blog></Blog>
        <hr />
        <Footer></Footer> */}
        <ListMusic/>
        <Task titulo="Beber água" status="Pendente" prazo="31/03/2023"/>
        <Task titulo="Fazer atividade" status="Pendente" prazo="16/03/2023"/>
        <Task titulo="Assistir aula" status="Concluída" prazo="18/03/2023"/>
        
    </div>
)

// let desc = 'React!'

// root.render(<section>
//     <h1>React é top!</h1>
//     <img src="https://picsum.photos/200" alt="descricao"/>
//     <p>Vamos aprender <br/> <b>{desc}</b></p>
// </section>)/