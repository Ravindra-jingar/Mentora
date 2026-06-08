import { createContext, useState } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {
 const [isLoggedIn, setIsLoggedIn] = useState("")
 const [currentUser, setCurrentUser] = useState("")

  return (

    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser
      }}
    >

      {children}

    </AuthContext.Provider>

  )
}


export default  AuthProvider