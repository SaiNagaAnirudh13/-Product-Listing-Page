"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: number
  email: string
  username: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, you would call your API here
      // For demo purposes, we'll simulate a successful login with FakeStoreAPI
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      // Simulate getting user data after successful login
      const mockUser = {
        id: 1,
        email,
        username: email.split("@")[0],
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const signup = async (email: string, username: string, password: string): Promise<boolean> => {
    try {
      // In a real app, you would call your API here
      // For demo purposes, we'll simulate a successful signup
      const mockUser = {
        id: Date.now(),
        email,
        username,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error("Signup error:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
