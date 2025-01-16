// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react'
import {useTodo} from '../contexts/TodoContext';

//WHAT IS IT??
// The TodoForm component allows users to add a new todo to the list. It has:

// An input field for entering the todo.
// A button to submit the new todo.
// A connection to the TodoContext so the addTodo function can add the new todo to the list.



function TodoForm() {

    const [todo , setTodo] = useState("")   // todo is the current value  of the input field
    const {addTodo} = useTodo()    // Getting addTodo from TodoContext:

    const add = (e) => {
      e.preventDefault()
      if(!todo) return   // stops is the todo  is empty 
      addTodo({todo , completed : false})  //// Adds the new todo with default `completed: false`.
      setTodo("")  // clears the input filed after form submission 
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange = {(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

// Real-life Analogy:
// Think of TodoForm as a shopping list maker:

// Input Field: A space to write down an item (e.g., "Buy Milk").
// Submit Button: Adds the item to the shopping list.
// TodoContext: The shared shopping list where all items are stored

