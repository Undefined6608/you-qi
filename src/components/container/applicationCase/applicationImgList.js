import "../../../css/container/applicationCase/applicationImgList.sass";

export const ApplicationImgList = ({imgLT, imgRT, imgRB, imgLB}) => {
    return (
        <div className="applicationImgList">
            <div className="imgLT">
                <img src={imgLT} alt=""/>
            </div>
            <div className="imgRT">
                <img src={imgRT} alt=""/>
            </div>
            <div className="imgLB">
                <img src={imgLB} alt=""/>
            </div>
            <div className="imgRB">
                <img src={imgRB} alt=""/>
            </div>
        </div>
    )
}