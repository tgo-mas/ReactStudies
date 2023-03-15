import "./Titulo.css"

export function Titulo({borderLeftColor, backgroundColor, align, children}){
    return(
        <h1 className="titulo" style={{borderLeftColor, backgroundColor, textAlign: align}}>
            {children}
        </h1>
    )
}