import { createBrowserRouter } from "react-router-dom";
import Layouts from "../components/layout/layout";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Blog from "../components/Pages/Blog/Blog";
import Recipes from "../components/Pages/Recipes/Recipes";
import PrivateRoute from "./PrivateRoute";
import Error from "../components/Pages/Error/Error";


const router = createBrowserRouter([
    {
      path: "/",
    element: <Layouts />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
            element: <Home />,
          },
          {
            path: '/login',
            element:<Login/>
          },
          {
            path: '/register',
            element:<Register/>
          },
          {
            path: 'blogs',
            element: <Blog/>
          },
          {
            path: "/chefRecipes/:id",
            element: <PrivateRoute><Recipes/></PrivateRoute>,
            loader: ({params})=>fetch(`https://chefs-recipe-asif247.vercel.app/recipes/${params.id}`)
          },
          
      ]
    },
]);
export default router;