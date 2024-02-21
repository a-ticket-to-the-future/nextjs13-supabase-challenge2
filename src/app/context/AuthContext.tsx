"use client"

import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type AuthContextProps = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

// 認証コンテキスト
const AuthContext = ({ children }: AuthContextProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  )
}

export default AuthContext

// "use client"

// import React from 'react'

// import { SessionProvider } from 'next-auth/react'

// type AuthContextProps = {
//     children:React.ReactNode

// }

// //　認証コンテキスト

// const AuthContext = ({ children }: AuthContextProps) => {
//   return (
//     <SessionProvider>{children}</SessionProvider>
//   )
// }

// export default AuthContext