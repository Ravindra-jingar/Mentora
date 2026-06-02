import { createContext, useState } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {
 const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")|| false )
 const [currentUser, setCurrentUser] = useState( JSON.parse(localStorage.getItem("user")))

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