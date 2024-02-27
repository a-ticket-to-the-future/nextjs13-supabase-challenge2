import { getAuthSession } from '@/app/lib/nextauth'
import { redirect } from 'next/navigation'
import PaymentDetail from "@/app/components/subscription/PaymentDetail"
import React from 'react'

type Props = {
    params: {
        clientSecret: string
    }
}

//　お支払い画面

const PaymentDetailPage = async ({params: {clientSecret}}: Props) => {

    //　認証情報取得
    const session = await getAuthSession()

    if (!session?.user) {
        redirect("/login")
    }

  return (
    <PaymentDetail 
        clientSecret={clientSecret}
        name = {session.user.name!}
        email = {session.user.email!}
    />
  )
}

export default PaymentDetailPage