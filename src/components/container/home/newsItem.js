import "../../../css/container/home/newsItem.sass"
export const NewsItem = ({newsItem}) =>{
    return(
        <div className="newsItem">
            <div className="newsIcon">
                <img src={newsItem.imgUrl} alt=""/>
            </div>
            <div className="msgBox">
                <span className={"title"}>{newsItem.title}</span>
                <span className={"date"}>{newsItem.date}</span>
                <span className={"context"}>{newsItem.context}</span>
                <div className={"newsItemBottom"}>
                    <span>{newsItem.tag}</span>
                    <span>-></span>
                </div>
            </div>
        </div>
    )
}