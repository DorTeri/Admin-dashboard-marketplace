import { styles } from '@/utils/styles'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Error = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className={`${styles.label}`}>
        Something went wrong! Please login with your admin account
      </p>
      <Link href="/sign-in"
      className={`${styles.button} bg-[#4a6eda] w-[130px] h-[38px] my-5`}>
        Login
      </Link>
    </div>
  )
}

export default Error