import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main/Main";
import AddBrand from "../AddBrand/AddBrand"
import BrandDetails from "../Home/Details/BrandDetails";
import MyCart from "../Mycart/MyCart";
import ProductDetails from "../Home/Details/ProductDetails";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SIgnUp/SignUp";


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
          path:"brand/:brandName",
          element:<BrandDetails></BrandDetails>,
          loader:()=>fetch('http://localhost:5000/fashion')
        },
        {
          path:"/product/:id",
          element:<ProductDetails></ProductDetails>,
          loader:()=>fetch('http://localhost:5000/fashion')
        },
        {
          path:"/myCart",
          element:<MyCart></MyCart>

        },
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);