import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import App from "./pages/App.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import SegEcommerce from "./seg-ecommerce.jsx";

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
    }
])

function Router() {
    return <RouterProvider router={routes}/>
}

export default Router