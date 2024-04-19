import { createBrowserRouter, redirect } from "react-router-dom"

import Login from "../pages/Login"
import User from "../pages/User"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
   
  },
  
  {
    path: "/User",
    element: <User/>,
     loader: () => {
      if (localStorage.role != "admin") {
        return redirect("/");
      } else {
        return null;
      }
    }, 
  }
]);

export default router