"use client"

import { useCallback, useState } from 'react'
import { signOut } from 'next-auth/react'
import { User } from '@prisma/client'

import React from 'react'

import useLoginModal from '@/app/hooks/useLoginModal'
import useSignUpModal from '@/app/hooks/useSignUpModal'
import useProfileModal from '@/app/hooks/useProfileModal'
import MenuItem from '@/app/components/navigation/MenuItem'
import Image from 'next/image'

type MenuProps = {
    currentUser : User | null
}

const Menu: React.FC<MenuProps> = ({currentUser}) => {

    const [isOpen, setIsOpen] = useState(false)
    const loginModal = useLoginModal()
    const signUpModal = useSignUpModal()
    const profileModal = useProfileModal()

    //　メニューオープン
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    },[])

  return (
    <div className=' relative'>
        <div className=' relative h-10 w-10 cursor-pointer' onClick={toggleOpen}>
            <Image
                src={currentUser?.image || '/default.jpeg'}
                className=' rounded-full object-cover'
                alt='avatar'
                fill
            />
        </div>

        {isOpen && (
            <div className=' absolute right-0 z-10 w-40 overflow-hidden rounded-lg bg-white text-sm shadow-lg shadow-gray-100'>
                <div className=' cursor-pointer'>
                    {currentUser ? (
                        <>
                        <MenuItem 
                            label="プロフィール"
                            onClick={() => {
                                profileModal.onOpen()
                                setIsOpen(false)
                            }}
                        />
                        <MenuItem 
                            label="ログアウト"
                            onClick={() => {
                                signOut()
                                setIsOpen(false)
                            }}
                        />
                        </>
                    ) : (
                        <>
                        <MenuItem 
                            label="ログイン"
                            onClick={() => {
                                loginModal.onOpen()
                                setIsOpen(false)
                            }}
                        />
                        <MenuItem 
                            label="サインアップ"
                            onClick={() => {
                                signUpModal.onOpen()
                                setIsOpen(false)
                            }}
                        />
                        </>

                    )}
                    
                </div>

            </div>
        )}

    </div>
  )
}

export default Menu