import {Header} from "../components/com/header";
import {Footer} from "../components/com/footer";
import {PageTop} from "../components/com/pageTop";
import {Case} from "../components/container/applicationCase/case";

export const ApplicationCases = () => {
    return(
        <>
            <Header title={"油漆涂料模板"}/>
            <PageTop imgUrl={"AD0I5Z_5CRACGAAgno6o6AUojs3x4Acw_g44wgM.jpg"}/>
            <Case />
            <Footer />
        </>
    )
}