import { useState } from "react"
import InputMask from "react-input-mask";
import "./Cadastro.css"

export function Cadastro() {

    const [users, setUsers] = useState([]);
    const [dadosUsers, setDados] = useState([]);

    function removerUsuario(user){
        let usersCopy = users;
        usersCopy.pop(user);
        setUsers(usersCopy);
        setDados(getDados(users));
    }

    function getDados(users){
        let dados = users.map((user, i) => {
            return (
                <tr key={i}>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                    <td>{user.cpf}</td>
                    <td>{user.salario}</td>
                    <td>
                        <button type="button" onClick={() => removerUsuario(user)}>
                            Excluir
                        </button>
                    </td>
                </tr>
            )});
        return dados;
    }

    function addUser() {
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let cpf = document.getElementById("cpf").value;
        let salario = document.getElementById("salario").value;

        let newUser = {
            nome,
            email,
            cpf,
            salario
        }

        let usersCopy = users;
        usersCopy.push(newUser);
        setUsers(usersCopy);

        setDados(getDados(users));
    }

    return (
        <div className="container">
            <form>
                <strong>Formulário de Cadastro</strong>
                <br />
                <label htmlFor="nome">Nome</label>
                <input type="text" placeholder="Digite seu nome" id="nome" />
                <br />
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="Digite seu email" id="email" />
                <br />
                <label htmlFor="cpf">CPF</label>
                <InputMask mask="999.999.999-99" id="cpf" placeholder="Digite seu CPF" />
                <br />
                <label htmlFor="salario">Salário</label>
                <input type="number" id="salario" placeholder="Digite seu salário" />
                <br />
                <button type="button" onClick={addUser} >Cadastrar</button>
            </form>
            <div className="table-div">
                <strong>Usuários Cadastrados</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>CPF</th>
                            <th>Salário</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosUsers}
                    </tbody>
                </table>
            </div>
        </div>
    )

}