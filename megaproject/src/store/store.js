// Why Do We Need This Code?
// This code sets up a Redux store using @reduxjs/toolkit. It is needed to manage global state in a React application, 
// ensuring that data (like user authentication and posts) is available across different components without 
// needing to pass props manually.

import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';  //authSlice → A slice (or part) of the Redux state that handles authentication (user login/logout).


const store = configureStore({
    reducer : {
        auth : authSlice ,  //What is a Reducer in Redux? : A reducer in Redux is a pure function that determines how the state should change in response to an action. It takes the current state and an action as inputs and returns the new state.
        // Todo : add more slices here for posts
    }
});

export default store;

//💡 Why Do We Need This?
// 1️⃣ Centralized State Management
// Redux stores application data in one place, making it easier to manage and share data between components.
// 2️⃣ Avoids Prop Drilling
// Instead of passing props down multiple levels, any component can directly access the store.
// 3️⃣ Makes the App Scalable
// The comment hints at adding more slices, meaning the app is designed to grow easily.
// 4️⃣ Efficient State Updates
// Redux optimizes re-rendering, so components update only when necessary, improving performance.