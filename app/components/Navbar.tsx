import React from 'react'
import DefLogo from '@/public/DefLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  return (
    <div className='h-auto w-full  bg-white flex justify-between shadow-md p-2 top-0 z-50 '>
      <div className='relative '>
        <Link href={`/`}>
        <Image src={DefLogo} width={24} height={24} alt='Company Logo'/>
        </Link>
      </div>
      <div className='flex flex-row items-center gap-2 font-medium '>
        <ul className='flex flex-row gap-4 '>
          <Link href={'/'}>
          <li className='text-neutral-300 hover:text-black ease-in transition-all duration-150'>
            Home
          </li>
          </Link>
          <Link href={'/docs'}>
          <li className='text-neutral-300 hover:text-black ease-in transition-all duration-150'>
            Docs
          </li>
          </Link>
          <Link href={'/about-us'}>
          <li className='text-neutral-300 hover:text-black ease-in transition-all duration-150'>
            About
          </li>
          </Link>
        </ul>
      </div>
      <Button variant={`default`}>Sign In</Button>
    </div>
  )
}

export default Navbar