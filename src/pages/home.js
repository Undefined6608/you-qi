import {Header} from "../components/com/header";
import {Footer} from "../components/com/footer";
import {getHomeBannerList} from "../tools/datas";
import {Banner} from "../components/container/home/banner";
import {About} from "../components/container/home/about";
import {CaseShow} from "../components/container/home/caseShow";
import {CaseShowList} from "../components/container/home/caseShowList";
import {Teams} from "../components/container/home/teams";
import {News} from "../components/container/home/news";
import {CompanyList} from "../components/container/home/companyList";

export const Home = ({history}) => {
    const homeBannerList = getHomeBannerList();
    return (
        <div id="home">
            <Header title={"油漆涂料模板"}/>
            <Banner bannerList={homeBannerList}/>
            <About />
            <CaseShow />
            <CaseShowList />
            <Teams />
            <News/>
            <CompanyList />
            <Footer/>
        </div>
    )
}