// dekho iss project mai akhir ho kya raha hai 
//4 hook hamne use kiye 
// humko password generate karna vo bhi har time ham kuch bhi action kare to password change ho jayee 
//


import {useState , useCallback , useEffect , useRef} from 'react'

function App() {             // hamne yahan par useState ko use kiya taki ham password ki value change kar sake 
    const [length , setLength] = useState(8)
    const [numberAllowed , setNumberAllowed] = useState(false);
    const [charAllowed , setCharAllowed] = useState(false)
    const [password , setPassword] = useState(" ")

    //useRef hook
    const passwordRef = useRef(null)
    
    //usesCallback hook
    //By wrapping it in useCallback, the function is only re-created when one of its dependencies (length, numberAllowed, charAllowed, or setPassword) changes.
    const passwordGenerator = useCallback(() =>{        // ye password generator function banaya  hai ismai akhir ho kya raha hai ?
      let pass = ""                                      // pass variable banaya jismai password daal saku 
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"          // ek str variable kismai sare character hai 
      if(numberAllowed) str += "0123456789"                               // if Number allowed hai to ise bhi str mai add kar do 
      if(charAllowed)  str += "!@#$%^&*-_+=[]{}~`"

      for(let i = 1 ; i<= length ; i++){                                 // loop lagaya jisse random no generate karke use char mai dalunga aur pass mai vo str add karta jayunga 
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)        
         
    },[length , numberAllowed , charAllowed , setPassword])      //Passing pass into setPassword ensures that:
                                                                 //The newly generated password is stored in the React state. 
                                                                 


    const copyPasswordToClipboard = useCallback(() =>{     // function for copying 
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0 , 999);
      window.navigator.clipboard.writeText(password)

    },[password])

    useEffect(() => {
         passwordGenerator()
    },[length , numberAllowed , charAllowed , passwordGenerator])
 

  return (
    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
         type ="text"
          value={password}
          className ="outline-none w-full py-1 px-3"
          placeholder = "Password"
          readOnly
          ref={passwordRef}
       />
       <button
       onClick ={copyPasswordToClipboard}
       className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       >copy
       </button>
      </div>

      <div className ="flex text-sm gap-x-2">
        <div className = "flex items-center gap-x-1">
            <input
            type = "range"
            min={6}
            max={100}
            value = {length}
            className ='cursor-pointer'
            onChange = {(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

      </div>
    </div>
  )
}

export default App


