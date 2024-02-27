
import { getAuthSession } from '../lib/nextauth'
import { redirect } from 'next/navigation'
import Success from "@/app/components/subscription/Success"

import React from 'react'

const SuccessPage = async () => {

    // 認証情報取得
    const session = await getAuthSession()

    if (!session?.user) {
        redirect("/login")
    }

  return <Success userId={session.user.id} />
}

export default SuccessPage