import "../../../css/container/goodsCenter/products.sass";
import {TitleBox} from "../../com/titleBox";
import {getProductList} from "../../../tools/datas";
import {ProductItem} from "./productItem";

export const Products = () => {
    const productList = getProductList();
    return(
        <div className={"products"}>
            <TitleBox title={"产品展示"} titleEn={"PRODUCTS"} />
            <div className="productList">
                {productList.map((item,index)=>(
                    <ProductItem key={item.id} imgUrl={item.imgUrl} name={item.name} />
                ))}
            </div>
        </div>
    )
}