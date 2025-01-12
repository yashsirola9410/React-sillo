import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user , setUser] = React.useState(null)
  return (
    <UserContext.Provider value={{user , setUser}}>
        {children}
    </UserContext.Provider>
   
  )
}

export default UserContextProvider

// usercontext provider ko use karte hai value jo usercontext mai store hai use provide karne ke liye 
