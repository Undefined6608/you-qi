import "../../../css/container/companyProfile/ourBrand.sass";
import {OurNumber} from "./ourNumber";
export const OurBrand = () => {
    return(
        <div className="ourBrand">
            <div className={"ourBrandTitleBox"}>
                <span className={"ourBrandTitle"}>企业实力</span>
                <span className={"ourBrandEn"}>OUR BRAND</span>
            </div>
            <div className="videoBox">
                <img src="/static/img/AD0I5Z_5CRACGAAgiauo6AUo0YzL6gUwsAk49AM.jpg.webp.webp" alt=""/>
            </div>
            <OurNumber />
        </div>
    )
}