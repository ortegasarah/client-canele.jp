import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import ProtectedPage from "../pages/ProtectedPage";
import Auth from "../pages/NoLogIn"
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import * as PATHS from "../utils/paths";
import CartPage from "../pages/CartPage";
import SuccesOrder from "../pages/SuccesOrder";
import About from "../pages/About";
import Stores from "../pages/Stores";

// import Order from "../pages/Order";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.USERPROFILE,
      element: user ? (
        <UserProfile {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    // {
    //   path: PATHS.ORDER,
    //   element: user ? <Order {...props} /> : <Navigate to={PATHS.LOGINPAGE} replace />

    // },
    {
      path: PATHS.SHOP,
      element: <Shop {...props} />,
    },
    {
      path: PATHS.ABOUT,
      element: <About {...props} />,
    },
    {
      path: PATHS.STORES,
      element: <Stores {...props} />,
    },
    {
      path: PATHS.PRODUCTDETAIL,
      element: <ProductDetail {...props} />,
    }, {
      path: PATHS.CART,
      element: user ?<CartPage {...props} /> : <Navigate to={PATHS.LOGINPAGE} replace />
    },
    , {
      path: PATHS.SUCCESS,
      element: user ?<SuccesOrder {...props} /> : <Navigate to={PATHS.LOGINPAGE} replace />
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
