import "../../../css/container/newsCenter/newBottomItem.sass";

export const NewBottomItem = ({title,msg,date,tag}) =>{
    return(
        <div className="newBottomItem">
            <div className="newBottomItemLeft">
                <span className={"title"}>{title}</span>
                <span className={"msg"}>{msg}</span>
                <span className={"tag"}>{tag}</span>
            </div>
            <div className="newBottomItemRight">
                <span className={"date"}>{date}</span>
            </div>
        </div>
    )
}