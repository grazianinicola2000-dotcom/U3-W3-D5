import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBarMobile";
import News from "./components/News";
import NewEpisodes from "./components/NewEpisodes";
import MoreToExplore from "./components/MoreToExplore";
import Footer from "./components/Footer";
import PlayerMobile from "./components/PlayerMobile";
import NavBarDesktop from "./components/NavBarDesktop";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <SideBar />
      <div className="md:ml-[200px]">
        <NavBarDesktop />
        <NavBar />
        <div className="pl-[30px]">
          <News />
          <NewEpisodes />
          <MoreToExplore />
        </div>
        <Footer />
        <PlayerMobile />
      </div>
    </div>
  );
}

export default App;
