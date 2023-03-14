import {Postagem} from "../Postagem/Postagem"
import "./style-blog.css"

export function Blog(){
    return(
        <section class="blog">
            <Postagem></Postagem>
            <Postagem></Postagem>
            <Postagem></Postagem>
            <Postagem></Postagem>
        </section>
    )
}