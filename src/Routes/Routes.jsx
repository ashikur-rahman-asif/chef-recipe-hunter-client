import { createBrowserRouter } from "react-router-dom";
import Layouts from "../components/layout/layout";
import Home from "../components/Pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
        element: <Layouts />,
        children: [
            {
                path: '/',
            element: <Home />,
          }
      ]
    },
]);
export default router;