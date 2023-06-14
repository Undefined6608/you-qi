import "../../../css/container/home/caseShowItem.sass"

export const CaseShowItem = ({imgUrl, title, msg}) => {
    return (
        <div className={"caseShowItem"}>
            <img src={imgUrl} alt=""/>
            <span className={"caseShowItemTitle"}>{title}</span>
            <span className={"caseShowItemMsg"}>{msg}</span>
        </div>
    )
}