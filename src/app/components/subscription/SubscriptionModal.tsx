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
    <div>SubscriptionModal</div>
  )
}

export default SubscriptionModal