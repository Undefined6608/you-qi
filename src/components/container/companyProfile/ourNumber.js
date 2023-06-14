import "../../../css/container/companyProfile/ourNumber.sass";
import {getOurNumberList} from "../../../tools/datas";
import {OurNumberItem} from "./ourNumberItem";
export const OurNumber = () => {
    const ourNumberList = getOurNumberList();
    return (
        <div className="ourNumber">
            {ourNumberList.map((item, index) => (
                <OurNumberItem key={item.id} top={item.top} bottom={item.bottom} topEnd={item.topEnd}/>
            ))}
        </div>
    )
}