import "./Task.css"

export function Task(props){
    let {titulo, status, prazo} = props;

    return(
        <div className="tarefa">
            <strong>{titulo}</strong>
            <div className="detalhes">
                <span className="status">{status}</span>
                <span className="prazo">{prazo}</span>
            </div>
        </div>
    );
}