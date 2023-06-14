import "../../css/com/titleBox.sass";
export const TitleBox = ({title,titleEn}) => {
    return (
        <div className="titleBox">
            <span className={"title"}>{title}</span>
            <span className={"titleEn"}>{titleEn}</span>
        </div>
    )
}