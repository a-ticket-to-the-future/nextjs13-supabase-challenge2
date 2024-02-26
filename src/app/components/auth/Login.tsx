"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card"
import LoginButton from "@/app/components/auth/LoginButton"

// ログイン
const Login = () => {
  return (
    <Card className="max-w-[500px] mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">ログイン</CardTitle>
        <CardDescription className="text-center">
          Quizをするにはログインが必要です
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <LoginButton />
      </CardContent>
    </Card>
  )
}

export default Login