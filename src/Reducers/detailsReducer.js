const initState = {
   game: {platforms : []},
   screen: {results : []},
   isloading : true,
    };
    
    
    const detailReducer = (State=initState,action) => {
    
    switch(action.type){
    
    case "Get_Detail":
        return {...State ,
             game: action.payload.game,
             screen: action.payload.screen,
             isloading:false,
             };

    case "ISLOADING":

    return {...State ,
        isloading:true,
        };

     default :
        return {...State};
    
    }
    
    }
    
    
    
    
    export default detailReducer;