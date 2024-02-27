import { NextRequest,NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";


export async function POST(request: NextRequest) {
    try {

        //　リクエストボディからメールアドレスとユーザーIDを取得
        const { userId } = await request.json()

        //　顧客IDを検索
        const search = await stripe.customers.search({
            query: `metadata['userId']:'${userId}'`,
        })

        //　顧客IDが存在しない場合
        if (search.data.length === 0) {
            return new NextResponse('顧客IDが存在しません', { status: 400 })
        }

        //　顧客IDを取得
        const customerId = search.data[0].id

        //　サブスクリプションを取得
        const subscriptions = await stripe.subscriptions.list({
            customer: customerId,
            status: "active",
            expand: ["data.default_payment_method"],
        })

        return NextResponse.json({ subscriptions })

    } catch (error:any) {
        console.log("Stripeエラー:",error.message)
        return new NextResponse("Stripeでエラーが発生しました",{ status: 500})
    }
}