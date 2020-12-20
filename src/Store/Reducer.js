import { ADDALL,ADDNAME } from "./Actions";

const initialState={
  alldata:[],
  compname:[]
}

const reducer=(state=initialState,action)=>{
   switch (action.type) {
       case (ADDALL):{
           console.log('dataadd'+action.fulldata);
// state.alldata=[...action.fulldata];
return {
    ...state,
    alldata:[...action.fulldata]
}
       }

       case (ADDNAME):{
        // console.log('dataadd'+action.fulldata);
        console.log('dataadd'+action.fulldata);

// state.compname=[...action.fulldata];
return {
    ...state,
    compname:[...action.fulldata]
}
    }
           
        
       default:{
console.log('same state returned');
           return state
       }

   }
}

export default reducer;