
import  React , {useEffect} from 'react';
import {useDispatch , useSelector} from "react-redux"
import { loadGames } from './../Actions/gamesActions';
import styled from "styled-components"
import  Game  from "../Components/Game";
import {motion, AnimatePresence,AnimateSharedLayout} from "framer-motion"
import GameDetails from "../Components/GameDetails"
import {useLocation} from "react-router-dom"
import { fadeIn } from "../animations";

const Home = ()=> {

const dispatch = useDispatch();
const Location = useLocation()
const pathId = Location.pathname.split("/")[2];

useEffect(() => {
  dispatch(loadGames());
  
},[dispatch])

const {popular,newGames,upComing,searched} = useSelector((state) => state.games);
console.log(searched,upComing,newGames,popular)

  return (
    <div>
      <GameList variants={fadeIn} initial="hidden" animate="show">
       <AnimateSharedLayout type="crossfade">
      <AnimatePresence> {pathId  && <GameDetails pathId={pathId} />} </AnimatePresence>
      {searched && searched.length ?  (
      <div className="searched">
        <h2> Searched Games </h2>
      <Games>
      
               { searched.map((game) =>(
                     <Game name={game.name} release={game.released} id={game.id} image={game.background_image} key={game.id} />
               )
                )}
              </Games>
              </div>
              ) : ''}
              <h2> Upcoming Games </h2>
              <Games>
               { upComing.map((game) =>(
                     <Game name={game.name} release={game.released} id={game.id} image={game.background_image} key={game.id} />
               )
                )}
              </Games>
              <h2> Popular Games </h2>
              <Games>
               { popular.map((game) =>(
                     <Game name={game.name} release={game.released} id={game.id} image={game.background_image} key={game.id} />
               )
                )}
              </Games>
              </AnimateSharedLayout>
       </GameList>
    </div>
  );
}
const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2{
  padding: 5rem 0rem;
}
`
const Games = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
`

export default Home;

