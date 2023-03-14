import {Music} from "../Music/Music"
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"

export function ListMusic(){
    return(
        // Fragment - <> </>
        <>
            <Music title="5GB" artist="CSS: Cansei de Ser Sexy" imgSrc={img1}/>
            <Music title="Oi, React!" artist="Zé HTML e CSS" imgSrc={img2}/>
            <Music title="LetiCSSia" artist="Zé Almir" imgSrc={img3}/>
        </>
    );
}