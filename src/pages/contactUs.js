import {Header} from "../components/com/header";
import {Footer} from "../components/com/footer";
import {LinkUs} from "../components/container/contactUs/linkUs";
import {BMap} from "../components/container/contactUs/bMap";
import {PageTop} from "../components/com/pageTop";

export const ContactUs = () => {
    return(
        <>
            <Header title={"油漆涂料模板"}/>
            <PageTop imgUrl={"AD0I5Z_5CRACGAAgqJmo6AUoxrff5gQw_g44wgM.jpg"} />
            <LinkUs />
            <BMap />
            <Footer />
        </>
    )
}