import {createSlice   , nanoid} from '@reduxjs/toolkit'  // nanoid new id generate karta hai 

const initialState ={
    todos : [{id : 1 , text : "Hello yash"}]  // todo ek array hai jimai objects honge 
}

export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers : {

    // state ke undar current state aur action ke undar jo bhi data pass hua hai 
      addTodo : (state , action) => {  // yahan mere ko hamesa do chize milengi "state and "action"
        const todo = {
            id : nanoid(),   // dekho nano id ayahn use ki new id generate karte rehne keliya 
            text : action.payload
        }
        state.todos.push(todo)  // array banaya to push kar do 
      },   
      removeTodo : (state , action) => {
        state.todos = state.todos.filter((todo) => todo.
    id1==  action.payload) 
      },
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer;