const URL = 'https://api.rawg.io/api/';
//const URL = {`https://api.rawg.io/api/developers/${5b5716f85a094a95bc609eec08b82d7e}`};

const GetCurrentMonth = () => {

const Month = new Date().getMonth() +1 ;

if(Month < 10 ){

return `0${Month}` ;

}
else {
    return Month;
}
}

const GetCurrentDay= () => {

    const Day = new Date().getDay() ;
    console.log(Day);

    if(Day < 10 ){
        if (Day < 1){
            return "31" ;
        }
    return `0${Day}` ;
    
    }
    
    else {
        return Day;
    }
    }

    const CurrentYear = new Date().getFullYear();
    const CurrentMonth = GetCurrentMonth();
    const CurrentDay = GetCurrentDay();
    const CurrentDate = `${CurrentYear}-${CurrentMonth}-${CurrentDay}`;
    const LastYear = `${CurrentYear-1}-${CurrentMonth}-${CurrentDay}`;
    const NextYear = `${CurrentYear+1}-${CurrentMonth}-${CurrentDay}`;


    const PopularGames = `games?key=5b5716f85a094a95bc609eec08b82d7e&dates=${LastYear},${CurrentDate}&ordering=-rating&page_size=10`
    const UpComingGames = `games?key=5b5716f85a094a95bc609eec08b82d7e&dates=${CurrentDate},${NextYear}&ordering=-rating&page_size=10`
    const NewGames = `games?key=5b5716f85a094a95bc609eec08b82d7e&dates=${LastYear},${CurrentDate}&ordering=-released&page_size=10`

    export const GamesURL = () => `${URL}${PopularGames}`;
    export const upcomingGamesURL = () => `${URL}${UpComingGames}`;
    export const NewGamesURL = () => `${URL}${NewGames}`;
    export const GameDetails = (id) => `${URL}games/${id}?key=5b5716f85a094a95bc609eec08b82d7e`;
    export const GameScreenShot = (id) => `${URL}games/${id}/screenshots?key=5b5716f85a094a95bc609eec08b82d7e`;
    export const searchGameURL = (game_name) =>`${URL}games?search=${game_name}&page_size=9&key=5b5716f85a094a95bc609eec08b82d7e`;