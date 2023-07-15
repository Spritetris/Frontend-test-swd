import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type dataType ={
  key: number;
  firstname: string;
  lastname:string;
  gender: string;
  phone: string;
  nationality: string;
  salary:number;
  passport:string;
  ID:string;
}

const initialValue: dataType[]=[{
  key: 1,
  firstname: "Sprite",
  lastname:"Woo",
  phone: "0998898867",
  gender: "female",
  nationality: "Thai",
  salary:30000,
  passport:"00000",
  ID:"0000000000",
  
},
{
  key: 1,
  firstname: "Plew",
  lastname:"Woo",
  phone: "0998898867",
  gender: "male",
  nationality: "Thai",
  salary:30000,
  passport:"00000",
  ID:"0000000000",
}]

const slice1 = createSlice({
    name: "slice1",
    initialState: initialValue,
    reducers: {
      addUser:(state,action) =>{
        console.log(action.payload)
        state.push({...action.payload})
      },
      deleteUser:(state,action) =>{
        console.log(action.payload)
        state=state.filter((item) => item.key !== action.payload.key)
    },
      

      
    }
  });
  
  export const {} = slice1.actions;
  export const slice1Selector = (store: RootState) => store.slice1Reducer;
  export default slice1.reducer;
  export const {addUser, deleteUser}= slice1.actions