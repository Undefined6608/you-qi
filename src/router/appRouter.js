import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/home";
import {createBrowserHistory} from 'history'
import {CompanyProfile} from "../pages/companyProfile";
import {ContactUs} from "../pages/contactUs";
import {GoodsCenter} from "../pages/goodsCenter";
import {ApplicationCases} from "../pages/applicationCases";
import {NewsCenter} from "../pages/newsCenter";

const history = createBrowserHistory();

export function AppRouter() {
    return (<BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home history={history}/>}/>
            <Route path={"/companyProfile"}
                   element={<CompanyProfile/>}/>
            <Route path={"/contactUs"} element={<ContactUs/>}/>
            <Route path={"/goodsCenter"} element={<GoodsCenter/>}/>
            <Route path={"/applicationCases"}
                   element={<ApplicationCases/>}/>
            <Route path={"/newsCenter"} element={<NewsCenter/>}/>
        </Routes>
    </BrowserRouter>)
}