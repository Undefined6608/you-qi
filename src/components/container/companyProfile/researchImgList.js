import "../../../css/container/companyProfile/researchImgList.sass"
export const ResearchImgList = ({left,centerTop,centerBottom,right}) =>{
    return(
        <div className="researchImgList">
            <div className="left">
                <img src={left} alt=""/>
            </div>
            <div className="center">
                <img src={centerTop} alt=""/>
                <img src={centerBottom} alt=""/>
            </div>
            <div className="right">
                <img src={right} alt=""/>
            </div>
        </div>
    )
}