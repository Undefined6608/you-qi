import "../../../css/container/home/about.sass"
import {AboutBottomItem} from "./aboutBottomItem";
import {getAboutBottomList} from "../../../tools/datas";
import {TitleBox} from "../../com/titleBox";

export const About = () => {
    const aboutBottomList = getAboutBottomList();
    return (
        <div className={"about"}>
            <div className="aboutTop">
                <TitleBox title={"关于我们"} titleEn={"ABOUT US"} />
                <div
                    className={"aboutMsg"}>公司是一家集研发、生产、销售为一体的科技型现代化企业，始建于2001年。经过十几年的发展，由当初的技术、销售全靠总部提供和扶持到今天具备独立自主研发能力和拥有众多知识产权专利、技术过硬、管理先进的高科技现代化企业。
                </div>
            </div>
            <div className="aboutBottom">
                {aboutBottomList.map((item, index) => (
                    <AboutBottomItem key={item.id} imgUrl={item.imgUrl} title={item.title} context={item.context}/>
                ))}
            </div>
        </div>
    )
}