"use client"

import React from 'react'
import Link from 'next/link'
import Menu from '@/app/components/navigation/Menu'

import { User } from '@prisma/client'

type NavigationProps = {
  currentUser : User | null
  isSubscription: boolean
}

const Navigation: React.FC<NavigationProps> = ({ currentUser, isSubscription }) => {
  return (
    <header className=' shadow-lg shadow-gray-100'>
        <div className=' container mx-auto flex max-w-screen-sm items-center justify-between  px-1 py-5'>
            <Link href="/" className=' cursor-pointer text-xl font-bold text-center ml-[250px]'>
                A ticket to the future
            </Link>
            <div className=' flex items-center justify-center space-x-2'>
              <Menu currentUser={currentUser} />
            </div>
        </div>
    </header>
  )
}

export default Navigation