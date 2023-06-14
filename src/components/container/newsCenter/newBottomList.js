import "../../../css/container/newsCenter/newBottomList.sass";
import {getNewBottomList} from "../../../tools/datas";
import {NewBottomItem} from "./newBottomItem";

export const NewBottomList = () =>{
    const newBottomList = getNewBottomList();
    return(
        <div className="newBottomList">
            {newBottomList.map((item,index)=>(
                <NewBottomItem key={item.id} title={item.title} msg={item.msg} date={item.date} tag={item.tag} />
            ))}
        </div>
    )
}