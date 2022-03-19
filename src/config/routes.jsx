import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import ProtectedPage from "../pages/ProtectedPage";
import Auth from "../pages/Auth"
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import * as PATHS from "../utils/paths";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.USERPROFILE,
      element: <UserProfile {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.AUTH,
      element: <Auth {...props} />,
    },
    {
      path: PATHS.SHOP,
      element: <Shop {...props} />,
    },
    {
      path: PATHS.PRODUCTDETAIL,
      element: <ProductDetail {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
