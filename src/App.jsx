import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBarMobile";
import Footer from "./components/Footer";
import PlayerMobile from "./components/PlayerMobile";
import NavBarDesktop from "./components/NavBarDesktop";
import SideBar from "./components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import AlertFav from "./components/AlertFav";
import { useEffect } from "react";
import { RESET_DUPLICATE } from "./redux/actions";

function App() {
  const duplicate = useSelector((state) => state.favourites.duplicate);

  const dispatch = useDispatch();

  useEffect(() => {
    if (duplicate) {
      setTimeout(() => {
        dispatch({ type: RESET_DUPLICATE });
      }, 3500);
    }
  }, [duplicate]);

  return (
    <>
      {console.log("duplicate:", duplicate)}
      {duplicate && <AlertFav />}
      <SideBar />
      <div className="md:ml-[200px]">
        <NavBarDesktop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
        <PlayerMobile />
      </div>
    </>
  );
}

export default App;
