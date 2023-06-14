import "../../../css/container/home/companyItem.sass";
export const CompanyItem = ({imgUrl}) => {
    return(
        <div className={"companyItem"}>
            <img src={imgUrl} alt=""/>
        </div>
    )
}