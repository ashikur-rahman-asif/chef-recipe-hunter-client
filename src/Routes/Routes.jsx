import { createBrowserRouter } from "react-router-dom";
import Layouts from "../components/layout/layout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts/>
    },
]);
export default router;