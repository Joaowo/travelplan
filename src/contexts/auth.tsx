import { createContext, useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
// api here is an axios instance which has the baseURL set according to the env.
import api from '../services/api'

export interface User {
  username: string
  role: []
  expiration: Date
}
interface AuthContextData {
  isAuthenticated: boolean
  isLoading: boolean
  user: string
  handleLogin(email: string, password: string): Promise<void>
  handleLogout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token')
      const user = Cookies.get('user')

      console.log('token')
      console.log(token)

      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid")
        api.defaults.headers.Authorization = `Bearer ${token}`
        if (user) console.log(user)
      }
      setIsLoading(false)
    }
    loadUserFromCookies()
  }, [])

  async function handleLogin(username: string, password: string) {
    console.log('chegou em handleLogin')
    console.log(username, password)
    const { data } = await api.post('/login', { username, password })
    const { jwt } = data
    console.log('data returned')
    console.log(data)
    if (jwt) {
      console.log('Got token')
      console.log(jwt)
      Cookies.set('token', jwt, { expires: 1 })
      api.defaults.headers.Authorization = `Bearer ${jwt}`

      const userData: User = {
        username: data.username,
        role: data.role,
        expiration: data.expiration
      }

      Cookies.set('user', userData, { expires: 1 })

      window.location.pathname = '/dashboard'
    }
  }

  function handleLogout() {
    Cookies.remove('token')
    Cookies.remove('user')
    delete api.defaults.headers.Authorization
    window.location.pathname = '/login'
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!Cookies.get('user'),
        user: Cookies.get('user') as string,
        isLoading,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuth = () => useContext(AuthContext)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading) {
    return <div> carregando ... </div>
  } else if (!isAuthenticated && window.location.pathname !== '/login') {
    window.location.pathname = 'login'
  }

  return children
}
