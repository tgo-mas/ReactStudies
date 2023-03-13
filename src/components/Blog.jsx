import {Postagem} from "./Postagem"
import "../style-blog.css"

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