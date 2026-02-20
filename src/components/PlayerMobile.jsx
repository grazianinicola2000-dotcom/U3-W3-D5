import { useSelector } from "react-redux";

const PlayerMobile = function () {
  const currentSong = useSelector((currentState) => currentState.player.currentSong);

  if (!currentSong) return null;

  return (
    <section className="md:hidden flex justify-center">
      <div className="w-[90%] flex items-center justify-between px-3 bg-bg-secondary py-2 rounded-lg mx-3 fixed bottom-0 mb-3 shadow-xl">
        <div className="flex items-center">
          <div className="w-[50px]">
            <img className="rounded-md" src={currentSong.album.cover} alt="Song_cover" />
          </div>
          <div className="ml-2">
            <p className="text-md">{currentSong.title_short}</p>
            <p className="text-sm text-icons">{currentSong.artist.name}</p>
          </div>
        </div>
        <div className="text-text-footer flex gap-5">
          <i className="bi bi-play-fill text-3xl"></i>
          <i className="bi bi-skip-forward-fill text-3xl"></i>
        </div>
      </div>
    </section>
  );
};

export default PlayerMobile;
