import { useState } from "react"

function App() {
   const [counter , setCounter] = useState(15)

   const addValue =() =>{
       setCounter(prevCounter => prevCounter + 1)  // ye prevCounter ka name aap kuch bhi de sakte ho ye bas ek tarika hai 
       // ye ek tarika hai aur ek tarika niche bhi hai waise bhi kar sakte hai

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
