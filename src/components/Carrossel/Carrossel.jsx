import { useState } from "react"
import "./Carrossel.css"

const imagens = [
    "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=925&format=pjpg&exif=1&iptc=1",
    "https://burst.shopifycdn.com/photos/tablet-coffee.jpg?width=925&format=pjpg&exif=1&iptc=1",
    "https://burst.shopifycdn.com/photos/startup-desk.jpg?width=925&format=pjpg&exif=1&iptc=1",
    "https://burst.shopifycdn.com/photos/team-sales-business-meeting.jpg?width=925&format=pjpg&exif=1&iptc=1"
]

export function Carrossel(){

    const [index, setIndex] = useState(0);

    function proxImg(){
        if(index === (imagens.length - 1)) setIndex(0);
        else setIndex(index + 1);
    }

    function antImg(){
        if(index === 0) setIndex(imagens.length - 1);
        else setIndex(index - 1);
    }

    return(
        <div className="carrossel">
            <div className="img-container">
                <img src={imagens[index]} alt="Imagem carrossel" />
            </div>
            <div className="buttons">
                <button type="button" onClick={proxImg}>Ant.</button>
                <button type="button" onClick={antImg}>Prox.</button>
            </div>
        </div>
    )

}