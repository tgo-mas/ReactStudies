// Export = define que a função pode ser importada
export function Mensagem() {
    const textoTitulo = "As batatas quando nascem se esparramam pelo chão";
    const nomeAutor = "J. Almir";
    const linkImagem = "http://picsum.photos/200"
    return (
      <section>
        <h2>{textoTitulo.toUpperCase()}</h2>
        <img src={linkImagem} alt="descricao"/>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
          pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
          aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
          duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </section>
    );
  }
  