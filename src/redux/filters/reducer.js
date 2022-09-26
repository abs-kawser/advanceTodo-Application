import {COLORCHANGED,STATUSCHANGED} from './actionTypes';
import initialState from './initialState';


const reducer =(state =initialState, action)=>{
   switch (action.type) {
    case STATUSCHANGED:
               return{
                ...state,
                  status: action.payload.status
               }
        
            case COLORCHANGED:
                const {color,changeType} =action.payload;
                 
                switch (changeType) {
                    case "add":

                      return{
                        ...state,
                        colors:[
                            ...state.colors,
                            color
                        ]
                      }
// nasted copy state 
                        case "remove":
                               return {
                                ...state,
                                colors:state.colors.filter(existingColor => existingColor!== color),
                               }
                
                    default:
                      return state;
                }

                   
    default:
        return state;
   }

}

export default reducer ;
