"use client"

import { useEffect, useState } from 'react'
import SubscriptionModal from '@/app/components/subscription/SubscriptionModal'

import React from 'react'



//　モーダルプロバイダー

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])

    if (!isMounted) {
        return null
    }

  return <SubscriptionModal />

}

export default ModalProvider