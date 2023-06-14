import "../../../css/container/applicationCase/case.sass";
import {TitleBox} from "../../com/titleBox";
import {getHomeCompanyList} from "../../../tools/datas";
import {CompanyItem} from "../home/companyItem";
import {ApplicationImgList} from "./applicationImgList";

export const Case = () => {
    const partnerList = getHomeCompanyList();
    return (
        <div className="case">
            <TitleBox title={"应用案例"} titleEn={"SHOW CASE"}/>
            <div className={"msg"}>
                <span>我们收集客户使用效果汇总，经过高分子专家不断精进创新，优化配方做更适合您产品。使用过程中，提供一对一使用技术指导，服务更加贴心。产品经过数万家企业、用户的使用，获得良好的评价。</span>
            </div>
            <ApplicationImgList imgLT={"/static/img/applicationImgLT.jpg.webp"}
                                imgRT={"/static/img/applicationImgRT.jpg.webp"}
                                imgLB={"/static/img/applicationImgLB.jpg.webp"}
                                imgRB={"/static/img/applicationImgRB.jpg.webp"}/>
            <TitleBox title={"合作伙伴"} titleEn={"PARTNERS"}/>
            <div className="partnerList">
                {partnerList.map((item, index) => (
                    <CompanyItem key={item.id} imgUrl={item.imgUrl}/>
                ))}
            </div>
        </div>
    )
}