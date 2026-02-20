import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/actions";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import SongCardGen from "./SongCardGen";

const NewReleases = function () {
  const dispatch = useDispatch();

  const songs = useSelector((currentState) => {
    return currentState.searched.songs;
  });

  useEffect(() => {
    dispatch(getSongs());
  }, []);

  return (
    <section>
      <div className="flex align-text-bottom mt-10 mb-2 relative">
        <h2 className="text-xl">Nuove uscite</h2>
        <ChevronRight className="w-[20px] absolute left-30 top-1 text-icons" />
      </div>
      <div className=" flex flex-wrap gap-4">{songs && songs.map((song) => <SongCardGen key={song.id} {...song} />)}</div>
    </section>
  );
};

export default NewReleases;
