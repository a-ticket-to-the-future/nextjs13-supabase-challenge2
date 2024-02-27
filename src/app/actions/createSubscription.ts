import prisma from "@/app/lib/prisma"
import { sub } from "date-fns"
import Stripe from "stripe"
import { string } from "zod"

//　サブスクリプション保存

const createSubscription = async ({
    userId,
    subscription,
    currentPeriodEnd,

}: {
    userId: string
    subscription: Stripe.Subscription
    currentPeriodEnd?: Date
}) => {
    //　サブスクリプション情報を保存
    await prisma.subscription.create({
        data: {
            userId,
            subscriptionId: subscription.id,
            customerId: subscription.customer as string,
            priceId: subscription.items.data[0].price.id,
            currentPeriodEnd,
        }
    })
    try {

    } catch (error) {
        console.log("error")
    }

}

export default createSubscription