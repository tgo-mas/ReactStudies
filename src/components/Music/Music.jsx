import ImageMusic from "../../assets/images/1.png";
import ImageMusic2 from "../../assets/images/2.png";
import ImageMusic3 from "../../assets/images/3.png";
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