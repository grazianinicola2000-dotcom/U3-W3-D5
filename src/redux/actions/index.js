export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const ADD_FAV_DUPLICATE = "ADD_FAV_DUPLICATE";
export const RESET_DUPLICATE = "RESET_DUPLICATE";

export const addToFavouriteAction = (data) => {
  return (dispatch, getState) => {
    const favourites = getState().favourites.content;
    console.log(getState());

    const alreadySaved = favourites.find((song) => song.id === data.id);

    if (alreadySaved) {
      dispatch({ type: ADD_FAV_DUPLICATE });
      return;
    }

    dispatch({
      type: ADD_TO_FAVOURITE,
      payload: data,
    });
  };
};

export const removeFromFavouriteAction = (i) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: i,
});

export const getSongs = function () {
  return async (dispatch) => {
    const songsEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

    try {
      const response = await fetch(songsEndpoint);

      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_SONGS_ERROR,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_SONGS_ERROR,
      });
      console.error(error);
    }
  };
};

export default getSongs;
