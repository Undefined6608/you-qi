import "../../../css/container/companyProfile/researchCenter.sass";
import {ResearchImgList} from "./researchImgList";
import {TitleBox} from "../../com/titleBox";

export const ResearchCenter = () => {
    return (
        <div className="researchCenter">
            <TitleBox title={"科研中心"} titleEn={"LABORATORY"} />
            <span className={"context"}>
                拥有七大生产基地和一个高新技术研发中心，是涂料行业生产研发高新企业集团之一。<br/>是国内具有开发、生产、销售化工涂料的大型民营高科技企业集团。
            </span>
            <ResearchImgList left={"/static/img/left.jpg.webp"} centerTop={"/static/img/centerTop.jpg.webp"} centerBottom={"/static/img/centerBottom.jpg.webp"} right={"/static/img/right.jpg.webp"} />
        </div>
    )
}