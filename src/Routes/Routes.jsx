import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main/Main";
import AddBrand from "../AddBrand/AddBrand"
import BrandDetails from "../Home/Details/BrandDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('http://localhost:5000/fashion'),
        },
        {
          path:"/addBrand",
          element:<AddBrand></AddBrand>,
        },
        {
          path:"brand/:id",
          element:<BrandDetails></BrandDetails>,
          loader:()=>fetch('http://localhost:5000/fashion')
        }
      ]
    },
  ]);