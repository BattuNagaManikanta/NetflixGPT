import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptSearch",
    initialState : {
        showGptPage : false
    },
    reducers : {
        toggleShowGptPage : (state)=>{
            state.showGptPage = !state.showGptPage
        }
    }
})

export const {toggleShowGptPage} =gptSlice.actions;
export default gptSlice.reducer;