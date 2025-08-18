import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import App from "./pages/App.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import SegEcommerce from "./pages/seg-ecommerce.jsx";
import SegEcommerceLocal from "./pages/seg-ecommerceLocal.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/thankyou",
        element: <ThankYouPage />
    },
    {
        path: "/seg-ecommerce",
        element: <SegEcommerce />
    },
    {
        path: "/seg-ecommerceLocal",
        element: <SegEcommerceLocal />
    }
])

function Router() {
    return <RouterProvider router={routes}/>
}

export default Router