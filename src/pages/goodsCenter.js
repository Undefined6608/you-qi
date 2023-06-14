import {Header} from "../components/com/header";
import {Footer} from "../components/com/footer";
import {PageTop} from "../components/com/pageTop";
import {Products} from "../components/container/goodsCenter/products";

export const GoodsCenter = () => {
    return(
        <>
            <Header title={"油漆涂料模板"}/>
            <PageTop imgUrl={"AD0I5Z_5CRACGAAglJWo6AUo0v364wcw_goodsCenter.jpg"} />
            <Products />
            <Footer />
        </>
    )
}