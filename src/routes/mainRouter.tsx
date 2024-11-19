import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import memberRouter from "./memberRouter.tsx";
import productRouter from "./productRouter.tsx";
import cartRouter from "./cartRouter.tsx";
import paymentRouter from "./paymentRouter.tsx";
import GoogleMapsPage from "../pages/map/GoogleMapsPage.tsx";
import ThemePage from "../pages/theme/ThemePage.tsx";
import sidebarRouter from "./sidebarRouter.tsx";

const MainPage = lazy(() => import("../pages/MainPage"))
const LoadingPage = lazy(() => import("../pages/LoadingPage"))
const PickupPage = lazy(() => import("../pages/pickup/PickupPage"))

export const Loading = <LoadingPage/>


const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={Loading}><MainPage/></Suspense>
    },
    {
        path: "/pickup",
        element: <Suspense fallback={Loading}><PickupPage /></Suspense>
    },
    {
        path: "/maps",
        element: <Suspense fallback={Loading}><GoogleMapsPage /></Suspense>
    },
    {
        path: "/theme",
        element: <Suspense fallback={Loading}><ThemePage /></Suspense>
    },
    productRouter,
    memberRouter,
    cartRouter,
    paymentRouter,
    sidebarRouter

])

export default mainRouter