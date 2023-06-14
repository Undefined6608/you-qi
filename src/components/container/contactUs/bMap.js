import "../../../css/container/contactUs/bmap.sass";
import {useEffect} from "react";
export const BMap = () => {
    useEffect(()=>{
        let bMap = new window.BMap.Map('map');
        // bMap.centerAndZoom(new window.BMap.Point(117.933166,36.833957),17)
        bMap.centerAndZoom(new window.BMap.Point(115.57239,34.84483),20)
    })
    return(
        <div id={"map"}>

        </div>
    )
}