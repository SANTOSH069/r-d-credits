import React from 'react'
import DefLogo from '@/public/DefLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '/about' },
  { label: 'Tax Credit FAQ', href: '/faq' },
  { label: 'Resources', href: '/about' },
]

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md'>
      <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6 relative'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 shrink-0'>
          <Image src={DefLogo} width={32} height={32} alt='Company Logo' />
        </Link>

        {/* Nav Links — absolutely centered */}
        <ul className='hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2'>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className='relative px-3 py-2 text-sm font-medium text-neutral-500 rounded-md transition-colors duration-150 hover:text-neutral-900 hover:bg-neutral-100'
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className='flex items-center gap-3'>
          <Link href='/sign-in'>
            <Button variant='outline' size='sm' className='text-sm font-medium'>
              Sign In
            </Button>
          </Link>
          <Link href='/sign-up'>
            <Button size='sm' className='text-sm font-medium'>
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar