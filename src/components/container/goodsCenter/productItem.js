import "../../../css/container/goodsCenter/productItem.sass";

export const ProductItem = ({imgUrl,name}) => {
    return(
        <div className="productItem">
            <img src={imgUrl} alt=""/>
            <span>{name}</span>
        </div>
    )
}