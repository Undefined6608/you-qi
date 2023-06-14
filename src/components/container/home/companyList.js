import "../../../css/container/home/companyList.sass";
import {getHomeCompanyList} from "../../../tools/datas";
import {CompanyItem} from "./companyItem";
export const CompanyList = () => {
    const companyList = getHomeCompanyList();
    return(
        <div className={"companyListBox"}>
            <div className="companyList">
                {companyList.map((item,index)=>(
                    <CompanyItem key={item.id} imgUrl={item.imgUrl} />
                ))}
            </div>
        </div>
    )
}