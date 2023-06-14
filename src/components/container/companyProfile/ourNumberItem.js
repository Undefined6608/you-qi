import "../../../css/container/companyProfile/ourNumberItem.sass";
export const OurNumberItem = ({top,bottom,topEnd}) =>{
    return(
        <div className="ourNumberItem">
            <span className={"top"}>{top}<span className={"topEnd"}>{topEnd}</span></span>
            <span className={"bottom"}>{bottom}</span>
        </div>
    )
}