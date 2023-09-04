'use client'

import { navLinks } from "../../constants"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Nav() {
  const pathname = usePathname()

  console.log('navLinks')
  console.log(navLinks)
  console.log(`pathname: ${pathname}`)

  return (
    <div className="w-full grid grid-cols-3">
      {navLinks.map((navLink) => (
        <Link key={navLink} href={`/${navLink.toLowerCase()}`} 
          className={`navLink 
            ${pathname?.split('/').pop() === navLink.toLowerCase() && 'underline decoration-red-800 underline-offset-4 font-bold text-lg'}
          `}
        >
          {navLink}
        </Link>
      ))}
    </div>
  )
}

export default Nav