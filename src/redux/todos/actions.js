
// akhon amer sobgula jonno ekta ekta kora action creator banabo 
import { ADDED,ALLCOMPLETED,TOGGLE,COLORESELECTD,DELETED,CLEARCOMPLETED } from "./actions";

export const added =(todoText)=>{
// action retrun kora type nama akta action jar moddha js object thakba let's start 

return {
  type:ADDED,
  payload:todoText

}

};

export const toggled =(todoId)=>{
  return {
    type:TOGGLE,
    payload:todoId
  
  }

};

export const coloreselected=(todoId,color)=>{
  return {
    type:COLORESELECTD,
    payload:{
      // name akrokom tai aiva lakha jai
      todoId,
      color
    }
  
  }

};

export const deleted=(todoId)=>{

  return {
    type:DELETED,
    payload:todoId
  
  }
};

export const allcompleted=()=>{
  return {
    type:ALLCOMPLETED,
   
  
  }

};

export const clearcompleted=()=>{
  return {
    type:CLEARCOMPLETED,
   
  
  }     

};



