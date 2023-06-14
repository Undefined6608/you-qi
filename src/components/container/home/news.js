import "../../../css/container/home/news.sass"
import {NewsItem} from "./newsItem";
import {getHomeNewsList} from "../../../tools/datas";
import {TitleBox} from "../../com/titleBox";
export const News = () => {
    const homeNewsList = getHomeNewsList();
    return(
        <div className={"homeNews"}>
            <TitleBox title={"新闻中心"} titleEn={"NEWS"} />
            <div className="newsList">
                {homeNewsList.map((item,index)=>(
                    <NewsItem key={item.id} newsItem={item}/>
                ))}
            </div>
        </div>
    )
}