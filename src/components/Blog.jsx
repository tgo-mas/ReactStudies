import {Postagem} from "./Postagem"
import {Footer} from "./Footer"
import "../style-blog.css"

export function Blog(){
    return(
        <section class="blog">
            <Postagem></Postagem>
            <Postagem></Postagem>
            <Postagem></Postagem>
            <Postagem></Postagem>
            <Footer></Footer>
        </section>
    )
}