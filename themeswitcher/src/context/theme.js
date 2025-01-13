import { createContext , useContext } from "react";

//createContext: Helps us create a "context" in React. 
// Think of it as a way to share data (like themes or settings)
//  across many components without passing them manually at every level.

//useContext: A hook to use the context created by createContext. 
// It allows any component to "read" or "use" the data from the context.

export const ThemeContext = createContext({  //ThemeContext: This is the context we created using createContext.
    themeMode : "light",
    darkTheme : () => {},
    lighttheme : () => {},
})

export const ThemeProvier = ThemeContext.Provider  //ThemeProvier.Provider: This will "wrap" components or your app to provide the ThemeContext data to them.


export default function useTheme(){  //Purpose: This is a custom hook named useTheme. It’s a shortcut to access the ThemeContext easily.
    return useContext(ThemeContext)
}