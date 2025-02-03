// stpes to make store
// 1 :- configure store lana hai 
// 2:- store variable banaya usmai configurestore method daal diya 
//3: - reducer banao


import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    reducer : todoReducer
});