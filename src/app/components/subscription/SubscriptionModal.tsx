"use client"

import {
  Dialog, 
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'
import { Button } from '@/app/components/ui/button/Button'
import { Separator } from '@/app/components/ui/separator'
import Link from 'next/link'
import useSubscriptionModal from '@/app/hooks/useSubscriptionModal'

import React from 'react'


//　サブスクリプションモーダル

const SubscriptionModal = () => {

  const modal = useSubscriptionModal()

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader className=' space-y-4'>
          <DialogTitle className=' text-center'>フリープラン終了</DialogTitle>
            <DialogDescription className=' text-center'>
              プランをアップグレードしてください
            </DialogDescription>
          
        </DialogHeader>
        <Separator />
        <Button 
          asChild
          variant='upgrade'
          className=' w-full'
          onClick={modal.onClose}
          icon={""}
          del
          disable
          outline
          label=''

        >
          <Link href="/checkout">アップグレード</Link>
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default SubscriptionModal