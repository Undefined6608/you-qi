import "../../../css/container/home/caseShow.sass"
import {Link} from "react-router-dom";
import {Banner} from "./banner";
import {getCaseShowBanner} from "../../../tools/datas";

export const CaseShow = () => {
    const caseShowBannerList = getCaseShowBanner();
    return(
        <div className={"caseShow"}>
            <div className="caseShowLeft">
                <div className="caseShowTitle">
                    <span>案例展示</span>
                    <span>CASE SHOW</span>
                </div>
                <span>我们收集客户使用效果汇总，经过高分子专家不断精进创新，优化配方做更适合您产品。提供一对一使用技术指导。产品经过数万家企业、用户的使用，获得良好的评价。</span>
                <Link className={"moreBtn"} to={"/applicationCases"}>
                    <div className={"cover"}></div>
                    <span>MORE</span>
                </Link>
            </div>
            <div className="caseShowRight">
                <Banner bannerList={caseShowBannerList} />
            </div>
        </div>
    )
}