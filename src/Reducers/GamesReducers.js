const initState = {
popular : [],
newGames : [],
upComing : [],
searched : [],
}


const gameReducer = (State=initState,action) => {

switch(action.type){

case "Fetch_Games":
    return {...State ,
         popular: action.payload.popular,
         upComing: action.payload.upComing,
         newGames: action.payload.newGames,
         };
         case "FETCH_SEARCHED":
            return {
              ...State,
              searched: action.payload.searched,
            };
          case "CLEAR_SEARCHED":
            return {
              ...State,
              searched: [],
            };

 default :
    return {...State};

}

}




export default gameReducer;