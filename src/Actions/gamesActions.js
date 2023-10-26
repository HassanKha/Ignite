import axios from "axios"

import { GamesURL , upcomingGamesURL , NewGamesURL,searchGameURL} from './../api';


export const loadGames = () => async (dispatch) => {

const popularData = await axios.get(GamesURL());
const upcomingGamesData = await axios.get(upcomingGamesURL());
const NewGamesData = await axios.get(NewGamesURL());
  
console.log(popularData);

dispatch({
    type: "Fetch_Games",
    payload: {
     popular : popularData.data.results,
     upComing : upcomingGamesData.data.results,
     newGames : NewGamesData.data.results,
    },
})

}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));
  
    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchGames.data.results,
      },
    });
  };