/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useState, useEffect, useContext } from 'react'

import api from '../services/api'

interface AuthContextData {
  signed: boolean
  user: object | null
  login(user: object): Promise<void>
  signup(user: object): Promise<void>
  logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user')
    const storagedToken = sessionStorage.getItem('@App:token')

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser))
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`
    }
  }, [])

  const login = async (userData: object) => {
    const response = await api.post('/auth', userData)

    setUser(response.data.user)
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user))
    sessionStorage.setItem('@App:token', response.data.token)
  }

  const signup = async (userData: object) => {
    const response = await api.post('/users', userData)
    setUser(response.data.user)
  }

  const logout = () => {
    sessionStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be within a AuthProvider.')
  }

  return context
}
