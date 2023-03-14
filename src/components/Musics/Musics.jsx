import ImageMusic from "../../assets/images/1.png";
import ImageMusic2 from "../../assets/images/2.png";
import ImageMusic3 from "../../assets/images/3.png";
import "./Musics.css"

export function Musics(){
    return(
        // Fragment - <> </>
        <>
            <div className="music">
                <img src={ImageMusic} alt="" />
                <h3>5GB</h3>
                <span>Node e Modules</span>
            </div>
            <div className="music">
                <img src={ImageMusic2} alt="" />
                <h3>Oi, React!</h3>
                <span>Zé HTML e CSS</span>
            </div>
            <div className="music">
                <img src={ImageMusic3} alt="" />
                <h3>LetiCSSia</h3>
                <span>Zé Almir</span>
            </div>
        </>
    );
}