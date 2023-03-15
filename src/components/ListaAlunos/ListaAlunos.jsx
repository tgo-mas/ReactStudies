import "./ListaAlunos.css"

const alunos = [{
    nome: "Thomas Almeida",
    dataNasc: "23/11/2002",
    nota: 7,
    telefone: '84 99438-9999'
}, {
    nome: "Helena Rizzo",
    dataNasc: "28/07/2002",
    nota: 5.4,
    telefone: '54 12318-4569'
}, {
    nome: "Evandro Gomes",
    dataNasc: "21/06/1996",
    nota: 6.7,
    telefone: '84 12318-9999'
}, {
    nome: "Solange Almeida",
    dataNasc: "28/09/2003",
    nota: 9.7,
    telefone: '84 99128-9999'
}];

export function ListaAlunos() {
    const alunoComponents = alunos.map((aluno) => { 
        return (
            <div className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'} >
                <h3>{aluno.nome}</h3>
                <p>Data nasc.: {aluno.dataNasc}</p>
                <p>Telefone: {aluno.telefone}</p>
                <p>{aluno.nota >= 7 ? `Nota: ${aluno.nota}` : "Não desista!"}</p>
            </div>
        );
    });

    return (
        <div className="lista-alunos">
            {alunoComponents}
        </div>
    );
}
