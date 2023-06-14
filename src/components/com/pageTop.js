import "../../css/com/pageTop.sass";
import {useEffect, useState} from "react";
export const PageTop = ({imgUrl}) => {
    const [bgImg,setBgImg] = useState("");
    useEffect(()=>{
        import("/public/static/img/"+imgUrl).then((r)=>{
            setBgImg(r.default)
        })
    },[imgUrl])
    return (
        <div className="pageTop" style={{
            backgroundImage: `url(${bgImg})`
        }}>
        </div>
    )
}