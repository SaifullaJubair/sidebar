import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import UnKnownRoutes from "./UnKnownRoutes";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/contact',
            element: <Contact></Contact>
         },
         {
            path: '/about',
            element: <About></About>
         },
      ]
   },
   {
      path: '*',
      element: <UnKnownRoutes></UnKnownRoutes>
   }
])