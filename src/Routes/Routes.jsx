import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main/Main";
import AddBrand from "../AddBrand/AddBrand"


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
        }
      ]
    },
  ]);