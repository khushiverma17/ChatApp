import { createSlice } from "@reduxjs/toolkit";

// export const themeSlice = createSlice({
//     name:'themeSlice',
//     initialState: true,
//     reducers:{
//         toggleTheme:(state)=>{
//             state=!state;
//         },
//     },
// });
export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: true,
    reducers: {
        toggleTheme: state => !state, // Return the new state directly
    },
});

// creating action generator
export const {toggleTheme}=themeSlice.actions;
export default themeSlice.reducer;
