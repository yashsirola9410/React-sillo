import { useContext , createContext } from "react"

//WHAT IS HAPPENING ??

//You're creating a Todo Context in React , which acts like a central storage where you can keep all your
//  "todo" data and functions (like adding, updating, or deleting todos). 
// Any component in your app can access this data or use these functions without needing to pass them down as props.


export const TodoContext = createContext({
    todos : [{
        id  :  1 , 
        todo : "Todo msg ",
        completed : false,
    }] ,
    addTodo : ()=>{},
    updateTodo :() =>{},
    deleteTodo : () => {},
    toggleComplete : ()=>{}
})

export const useTodo = () => {   //Purpose: A custom hook that makes it easier for your components to access TodoContext.
    return useContext(TodoContext);   // useContext  we used to access the content we created using createContext 
}                                       // 

export const TodoProvider = TodoContext.Provider   //Purpose: A special wrapper component for your app that "provides" the TodoContext to its children.
