import { useDispatch } from "react-redux";
import { addToFavouriteAction } from "../redux/actions";
import { setCurrentSong } from "../redux/actions";

const SongCardGen = function (props) {
  const dispatch = useDispatch();

  const handleFavourites = () => {
    dispatch(addToFavouriteAction(props));
  };

  const handlePlay = () => {
    dispatch(setCurrentSong(props));
  };

  return (
    <div
      className="flex flex-col w-[150px]"
      onClick={() => {
        handlePlay();
      }}
    >
      <div className="relative">
        <img className="rounded-lg w-[100%]" src={props.album.cover} alt="prologo_con_Abuelo" />
        <i
          className="text-yellow-300 bi bi-star-fill absolute top-1 left-2 hover:scale-150 hover:cursor-pointer"
          onClick={() => {
            handleFavourites();
          }}
        ></i>
      </div>
      <div className="flex justify-between items-start mt-1">
        <div>
          <p className="text-xs">{props.title_short}</p>
          <p className="text-artist text-icons">{props.artist.name}</p>
        </div>
        <i className="bi bi-explicit-fill text-xs text-icons"></i>
      </div>
    </div>
  );
};

export default SongCardGen;
