import {Header} from "../components/com/header";
import {Footer} from "../components/com/footer";
import {About} from "../components/container/home/about";
import {OurBrand} from "../components/container/companyProfile/ourBrand";
import {ResearchCenter} from "../components/container/companyProfile/researchCenter";
import {PageTop} from "../components/com/pageTop";

export const CompanyProfile = () => {
    return (
        <>
            <Header title={"油漆涂料模板"}/>
            <PageTop imgUrl={"AD0I5Z_5CRACGAAg0qio6AUo0pjakQcw_g44wgM.jpg"} />
            <About/>
            <OurBrand/>
            <ResearchCenter/>
            <Footer/>
        </>
    )
}