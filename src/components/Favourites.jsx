import { useDispatch, useSelector } from "react-redux";
import { removeFromFavouriteAction } from "../redux/actions";
import SongCardGen from "./SongCardGen";

const Favourites = function () {
  const favourites = useSelector((currentState) => {
    return currentState.favourites.content;
  });

  const dispatch = useDispatch();

  return (
    <section className="ml-[30px]">
      <div className="flex align-text-bottom mt-10 mb-2 relative">
        <h2 className="text-xl">Preferiti</h2>
      </div>
      <div className=" flex flex-wrap gap-4">
        {favourites &&
          favourites.map((song, i) => (
            <div>
              <SongCardGen key={song.id} {...song} />
              <p
                onClick={() => {
                  dispatch(removeFromFavouriteAction(i));
                }}
                className="text-remove text-icons hover:text-red-600 hover:underline hover:cursor-pointer"
              >
                Remove
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Favourites;
