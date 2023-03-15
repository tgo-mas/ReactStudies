import "./Music.css"

export function Music(props){
    let {imgSrc, title, artist} = props;

    return(
        <div className="music">
            <img src={imgSrc} alt="" />
            <h3>{title}</h3>
            <span>{artist}</span>
        </div>
    );
}