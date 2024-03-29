import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";


export async function GET() {
    try {

        //　Stripeに登録した商品情報を取得
        const prices = await stripe.prices.list({
            //　検索キーを指定
            lookup_keys:["standard", "premium"], //ここはおれのStripeアカウントと内容が違う
            //lookup_keysを指定しないと全ての商品が取得されるそうです
            expand:["data.product"],
        })

        return NextResponse.json({ prices: prices.data})

    } catch (error:any) {
        console.log('Stripeエラー',error.message)
        return new NextResponse('Stripeでエラーが発生しました',{status:500})
    }
}