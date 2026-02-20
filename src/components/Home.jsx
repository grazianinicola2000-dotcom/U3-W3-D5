import MoreToExplore from "./MoreToExplore";
import NewEpisodes from "./NewEpisodes";
import NewReleases from "./NewReleases";
import News from "./News";

const Home = function () {
  return (
    <div className="pl-[30px]">
      <News />
      <NewEpisodes />
      <NewReleases />
      <MoreToExplore />
    </div>
  );
};

export default Home;
