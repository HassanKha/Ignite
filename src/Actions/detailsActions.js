import axios  from 'axios';
import {GameDetails , GameScreenShot} from "./../api"


const loadDetails = (id) => async (dispatch) => {

dispatch({type:"ISLOADING"});




const detailData = await axios.get(GameDetails(id)  );
const detailDatascreen = await axios.get(GameScreenShot(id));

dispatch({
type: "Get_Detail",
payload: {
    game: detailData.data,
    screen: detailDatascreen.data,
}

});

};

export default loadDetails;