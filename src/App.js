import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUserLogged, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";

/* STYLES */
import GlobalStyle from './globalStyles';

/* COMPONENTS */
import Sidebar from "./components/Sidebar/Sidebar";
import ScrollToTop from "./components/ScrollToTop.";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import ModalInner from "./components/ModalInner/ModalInner";
import Footer from "./components/Footer/Footer";


export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

   /* TOGGLE SIGN UP MODAL */
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

//  /* TO TOGGLE MENU BURGER */
//   const [ isOpen, setIsOpen ] = useState(false);
//   const toggle = () => {
//     setIsOpen(!isOpen)
//   }
//   /* CONDITIONNALY RENDER BURGER MENU BASED ON VIEWPORT SIZE */
//   const [isMobile, setMobile] = useState(window.innerWidth < 760);
//   const updateMedia = () => {
//     setMobile(window.innerWidth < 760);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateMedia);
//     return () => window.removeEventListener("resize", updateMedia);
//   });



  useEffect(() => {
    getUserLogged().then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.result);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    setIsLoading(true);
    logout().then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }



  return (
    <div className="App">
      <>      
      <GlobalStyle />
      <ScrollToTop />
      {/* {showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalInner />
        </Modal>
      )}
      {isMobile ? 
      <Sidebar isOpen={isOpen} toggle={toggle} handleLogout={handleLogout} user={user}/>
      :
      <Navbar toggle={toggle} handleLogout={handleLogout} user={user} />
      }
       */}
        {/* <Navbar toggle={toggle} handleLogout={handleLogout} user={user} /> */}
<Navbar />      
      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />

      </>

    </div>
  );
}
