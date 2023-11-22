'use client'
import { styles } from '@/utils/styles'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation"

type Props = {}

const Error = (props: Props) => {

  const { signOut } = useClerk()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut()
    router.push("/sign-in")
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className={`${styles.label}`}>
        Something went wrong! Please login with your admin account
      </p>
      <div className={`${styles.button} bg-[#4a6eda] w-[130px] h-[38px] my-5`}
        onClick={handleLogout}>
        Logout
      </div>
    </div>
  )
}

export default Error