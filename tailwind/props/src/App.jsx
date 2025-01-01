/* eslint-disable no-unused-vars */

import './App.css'
import  Card from './components/card'

function App() {
  let myobj = {
    username : "yash",
    age : 21
  }

  let newarr = [1 , 2 , 3 , 4]
  

  return (
    <>
       <h1 className='bg-black text-white p-4 rounded-xl mb-4' > Hello Yash </h1>
       <Card username = "yashsirola"  btnText = "Click me"/>
       <Card username = "hello"/>
    </>
  )
}

export default App
