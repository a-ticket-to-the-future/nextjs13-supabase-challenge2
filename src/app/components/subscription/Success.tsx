" use client "

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { CheckCircleIcon } from 'lucide-react'
import { Card, CardHeader } from '../ui/card'
import { useMutation } from '@tanstack/react-query'
import { useToast } from '../ui/use-toast'
import Stripe from 'stripe'
import axios from 'axios'

import React from 'react'

type SuccessProps = {
    userId: string
}

//　お支払い成功
const Success:React.FC<SuccessProps> = ({userId}) => {

    const router = useRouter()
    const { toast } = useToast()
    const [subscriptions, setSubscriptions] = useState<Stripe.Subscription[]>([])

     //　サブスクリプション情報取得
     const { mutate: getSubscriptions, isLoading: getLorading} = useMutation({
        mutationFn: async () => {
            const response = await axios.post("/api/subscriptions", {
                userId,
            })
            return response.data
        },
     })

     //　ページ表示時にサブスクリプション情報取得
     useEffect(() => {

        const fetchData = async () => {
            getSubscriptions(undefined, {
                onSuccess:({ subscriptions }) => {
                    setSubscriptions(subscriptions.data)
                    router.refresh()
                },

                onError: (error:any) => {
                    console.log(error)
                    toast({
                        title: "サブスクリプション情報取得に失敗しました",
                        description: "お手数をおかけして大変恐れ入りますが,お問い合わせください",
                        variant: "destructive",
                    })
                },
            })
        }
        
        fetchData()

     },[getSubscriptions,toast,router])


  return (
    <div className=' max-w-[450px] mx-auto'>
        <div className=' flex flex-col items-center justify-center space-y-2 mb-5'>
            <CheckCircleIcon width={50} height={50} className=' text-green-500' />
            <div className=' font-bold text-xl'>お支払いが完了しました</div>
        </div>

        {getLorading && (
            <div className=' text-center text-sm my-5'>詳細情報取得中...</div>
        )}

        <div className=' mb-5'>
            {subscriptions.length > 0 && 
                subscriptions.map((subscription) => {
                    const current_period_start = new Date(
                        subscription.current_period_start * 1000
                    )
                    const current_period_end = new Date(
                        subscription.current_period_end * 1000
                    )

                    return (
                        <Card>
                            <CardHeader>
                                <div>お支払いNo：{subscription.id}</div>
                                <div>サブスクリプション状態：{subscription.status}</div>
                                <div>
                                    開始日:
                                    {format(current_period_start, "yyyy年MM月dd日 HH:MM",{
                                        locale: ja,
                                    })}
                                </div>
                                <div>
                                    有効期限:
                                    {format(current_period_end, "yyyy年MM月dd日 HH:MM",{
                                        locale: ja,
                                    })}
                                </div>
                            </CardHeader>
                        </Card>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Success