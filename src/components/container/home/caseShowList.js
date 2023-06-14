import "../../../css/container/home/caseShowList.sass"
import {getCaseShowList} from "../../../tools/datas";
import {CaseShowItem} from "./caseShowItem";
export const CaseShowList = () => {
    const caseShowList = getCaseShowList();
    return(
        <div className={"caseShowList"}>
            {caseShowList.map((item,index)=>(
                <div className={"item"} key={item.id}>
                    <CaseShowItem imgUrl={item.imgUrl} title={item.title} msg={item.msg} />
                </div>
            ))}
        </div>
    )
}