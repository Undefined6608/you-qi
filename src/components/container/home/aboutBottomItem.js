import "../../../css/container/home/aboutBottomItem.sass"

export const AboutBottomItem = ({imgUrl, title, context}) => {
    return (
        <div className="aboutBottomItem">
            <img src={imgUrl} alt=""/>
            <span className="aboutBottomItemTitle">{title}</span>
            <span>{context}</span>
        </div>
    )
}