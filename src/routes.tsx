import { createBrowserRouter } from "react-router-dom";

import Feed from "./feed";
import Login from "./auth/login";
import SignUp from "./auth/sign-up";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Routes;
