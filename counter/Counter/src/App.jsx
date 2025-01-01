import { useState } from "react"

function App() {
   const [counter , setCounter] = useState(15)

   const addValue =() =>{
       setCounter(prevCounter => prevCounter + 1)

   }

   const removeValue =() => {
      setCounter(counter -1 )
   }

  return (
    <>
     <h1>Yash ka code </h1>
     <h2> counter value  : {counter}</h2>

     <button onClick ={addValue}>Add value {counter}</button>
     <br/>
     <button onClick ={removeValue}> Remove value {counter}</button>
     <p> footer : {counter}</p>
     </>

  )
}

export default App
