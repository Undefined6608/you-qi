import "../../css/com/footer.sass";
import {getFooterMenu} from "../../tools/datas";

export const Footer = () => {
    const footerMenu = getFooterMenu();
    return (
        <div className={"footer"}>
            <div className="footerTop">
                {footerMenu.top.map((item, index) => (
                    <span key={index}>{item.title + item.msg}</span>
                ))}
            </div>
            <div className="footerBottom">
                <span>{footerMenu.bottom.itemTop}</span>
                <span>{footerMenu.bottom.itemBottom}</span>
            </div>
        </div>
    )
}