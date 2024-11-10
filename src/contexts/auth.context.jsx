import { createContext, useEffect, useState } from "react"
import authService from "../services/auth.services"

const AuthContext = createContext()

const AuthProviderWrapper = ({ children }) => {

    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        authenticateUser()
    }, [])

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const logout = () => {
        setIsLoading(false)
        setUser(null)
        removeToken()
        localStorage.removeItem('role')
    }

    const authenticateUser = (onSuccess = () => { }) => {

        const token = localStorage.getItem("authToken")

        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setUser(data)
                    setIsLoading(false)
                    onSuccess()
                })
                .catch(() => {
                    logout()
                })
        } else {
            logout()
        }
    }

    return (
        <AuthContext.Provider value={{ user, authenticateUser, storeToken, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }