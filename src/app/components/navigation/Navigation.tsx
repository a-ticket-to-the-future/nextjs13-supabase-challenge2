"use client"

import React from 'react'
import Link from 'next/link'
import Menu from '@/app/components/navigation/Menu'

import { User } from '@prisma/client'
import { Button } from '../ui/button/Button'
import UserNavigation from '../auth/UserNavigation'
import { type Session } from "next-auth"
import { boolean } from 'zod'

// type NavigationProps = {
//   currentUser : User | null
//   isSubscription: boolean
// }

type NavigationProps = {
  session: Session | null
  isSubscription: boolean
  currentUser : User | null
  
}

const Navigation: React.FC<NavigationProps> = ({ currentUser, isSubscription, session }) => {
  return (
    <header className=' shadow-lg shadow-gray-100'>
        <div className=' container mx-auto flex max-w-screen-sm items-center justify-between  px-1 py-5'>
            <Link href="/" className=' cursor-pointer text-xl font-bold text-center ml-[250px]'>
                A ticket to the future
            </Link>
            <div className=' flex items-center justify-center space-x-2'>
              <Menu currentUser={currentUser} />
            </div>

          {session?.user ? (
            <div>
            {!isSubscription && (
              <Button asChild variant="upgrade">
                <Link href="/checkout">アップグレード</Link>
              </Button>
            )}
            <UserNavigation user={session.user} />
            </div>
          ) : (
            <Button>
              <Link href="/login">ログイン</Link>
            </Button>
            )}
        </div>
    </header>
  )
}

export default Navigation