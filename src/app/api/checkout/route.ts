import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";

export async function POST(request:Request) {
    try{

        // リクエストボディからユーザーID、価格ID、名前、メールアドレスを取得
        const {userId, priceId, name, email} = await request.json()

        //　Stripeから顧客IDを検索
        const search = await stripe.customers.search({
            query: `metadata['userId']:'${userId}'`,
        })

        let customerId 

        if (search.data.length > 0) {
            //　顧客ID取得
            customerId = search.data[0].id
        } else {
            //　顧客ID作成
            const customer = await stripe.customers.create({
                name,
                email,
                metadata: {
                    userId,
                },

            })
            customerId = customer.id
        }

    }catch (error:any) {
        console.log("Stripeエラー", error.message)
        return new NextResponse("Stripeでエラーが発生しました",{status:500})
    }
}