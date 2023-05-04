import { createBrowserRouter } from "react-router-dom";
import Layouts from "../components/layout/layout";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import Blog from "../components/Pages/Blog/Blog";
import Recipes from "../components/Pages/Recipes/Recipes";


const router = createBrowserRouter([
    {
      path: "/",
        element: <Layouts />,
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
            element: <Recipes/>,
            loader: ({params})=>fetch(`http://localhost:5000/recipes/${params.id}`)
          }
      ]
    },
]);
export default router;