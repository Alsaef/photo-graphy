import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/portfolio',
            element:<Portfolio></Portfolio>
        },
        {
            path:'/about-us',
            element:<About></About>
        },
        {
            path:'/contact-us',
            element:<Contact></Contact>
        },
    ]
  },
]);