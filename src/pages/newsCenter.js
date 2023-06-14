import {Header} from "../components/com/header";
import {Footer} from "../components/com/footer";
import {PageTop} from "../components/com/pageTop";
import {NewTopList} from "../components/container/newsCenter/newTopList";
import {NewBottomList} from "../components/container/newsCenter/newBottomList";

export const NewsCenter = () => {
    return (
        <>
            <Header title={"油漆涂料模板"}/>
            <PageTop imgUrl={"AD0I5Z_5CRACGAAg0YSo6AUowIyajAUw_g44wQM.jpg"} />
            <NewTopList />
            <NewBottomList />
            <Footer/>
        </>
    )
}