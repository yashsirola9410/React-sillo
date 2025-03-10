import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status : false ,
    userData : null
}

const authSlice = createSlice({
    name  : "auth",
    initialState,  //initialState → The default values for this slice.
    reducers : {
        login : (state , action) => {
            state.status = true ;
            state.userData = action.payload.userData;  //action.payload.userData → Extracts user data from the payload and updates userData in the state.
        },
        logout : (state) => {
            state.status = false ;
            state.userData = null;
        }
    }
})

export const {login , logout} = authSlice.actions;

export default authSlice.reducer ;