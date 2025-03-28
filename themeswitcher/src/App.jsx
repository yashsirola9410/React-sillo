
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvier } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode , setThemeMode] = useState("light")

  const lighttheme = () => {setThemeMode("light")}
  const darkTheme = ()=>{setThemeMode("dark")}

  //actual change in the theme 

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
<ThemeProvier value = {{themeMode , lighttheme , darkTheme}}>

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

</ThemeProvier>

  )
}


export default App
