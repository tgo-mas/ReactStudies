export function Postagem() {
    let titulo = "Esse é o título"
    let conteudo = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id mollitia tempore hic eaque totam quae, asperiores omnis? Sapiente, dicta! Doloribus reiciendis saepe sint dignissimos id error laborum dicta necessitatibus nesciunt!"
    return (
        <section class="postagem">
            <img src="https://picsum.photos/200" alt="Pic aleatória" />
            <h1>{titulo}</h1>
            <p>{conteudo}</p>
        </section>
    )
}