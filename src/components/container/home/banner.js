import {Carousel} from "antd";
import "../../../css/container/home/banner.sass";

export const Banner = ({bannerList}) => {
    return (
        <div className="banner">
            <Carousel autoplay>
                {bannerList.map((item, index) => (
                    <div key={item.id} className="bannerItem">
                        <img src={item.imgUrl} alt=""/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}