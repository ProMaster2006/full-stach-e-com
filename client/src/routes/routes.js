import BasketPage from "../pages/BasketPage";
import BrandInfoPage from "../pages/BrandInfoPage";
import ContactPage from "../pages/ContactPage";
import DevicePage from "../pages/DevicePage";
import MainPage from "../pages/MainPage";
import ShopPage from "../pages/ShopPage";


export const routes = [
    { path: '/', component: <MainPage/> },
    { path: '/shop', component: <ShopPage/> },
    { path: '/devicePage/:id', component: <DevicePage/>},
    { path: '/basket', component: <BasketPage/> },
    { path: '/brand', component: <BrandInfoPage/> },
    { path: '/contact', component: <ContactPage/> }
]