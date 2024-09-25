import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorsPage from "./pages/ErrorsPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        errorElement: <ErrorsPage />,
        children:[
            { index: true, element:<HomePage /> },
            { path:"games/:slug", element:<GameDetailPage />}
        ]
    }
])

export default router;