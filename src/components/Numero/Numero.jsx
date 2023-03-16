import "./Numero.css"

export function Numero({numero}){
    return(
        <div className="card-numero">
            <h3>{numero}</h3>
            <h5>{numero % 2 == 0 ? 'Par' : 'Ímpar'}</h5>
        </div>
    )
}