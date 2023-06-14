import "../../../css/container/newsCenter/newTopList.sass";
import {NewsItem} from "../home/newsItem";
import {getHomeNewsList} from "../../../tools/datas";

export const NewTopList = () =>{
    const homeNewsList = getHomeNewsList();
    return(
        <div className="newTopList">
            {homeNewsList.map((item,index)=>(
                <NewsItem key={item.id} newsItem={item}/>
            ))}
        </div>
    )
}