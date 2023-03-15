import "./ListaCompras.css"

const produtos = [
    { cod: 1, nome: "Batata palha", quantidade: 5, precoUnitario: 5.5 },
    { cod: 2, nome: "Batata frita pronta", quantidade: 3, precoUnitario: 10.5 },
    { cod: 3, nome: "Batata doce", quantidade: 10, precoUnitario: 20 },
    { cod: 4, nome: "Batata chips", quantidade: 5, precoUnitario: 15 },
];

export function ListaCompras() {

    const elementosCompras = produtos.map((prod) => {
        return(
            <li key={prod.cod} className="card-compra">
                <h2>{prod.nome}</h2>
                <p>QUANTIDADE: {prod.quantidade}</p>
                <p>SUBTOTAL: {prod.quantidade * prod.precoUnitario}</p>
            </li>
        )
    });

    return (
        <div className="lista-compras">
            <ul>
                {elementosCompras}
            </ul>
        </div>
    )
}