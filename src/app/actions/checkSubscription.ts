import prisma from "@/app/lib/prisma"

const DAY_IN_MS = 86_400_000


const checkSubscription = async ({
    userId,
}: {
    userId: string | undefined
}) => {
    if (!userId) {
        return false
    }

    //　サブスクリプション情報を取得
    const subscription = await prisma.subscription.findUnique({
        where: {
            userId,
        },
        select:{
            currentPeriodEnd: true,
            priceId:true,
        },
    })

    //　サブスクリプション情報が存在しない場合
    if (!subscription) {
        return false
    }

    //　サブスクリプションの有効期限をチェック
    const isValid = 
    subscription.priceId && 
    subscription.currentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

    return !!isValid

}

export default checkSubscription


