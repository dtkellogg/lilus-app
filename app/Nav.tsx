'use client'

import { navLinks } from "../constants"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// const navLinks = [
// 'blog',
// 'about',
// 'contact',
// ]

function Nav() {
  // const pathname = usePathname()
  // const isActive = (path: string) => {
  //   return pathname?.split('/').pop() === path
  // }

  console.log('navLinks')
  console.log(navLinks)

  return (
    <div className="w-full flex justify-evenly">
      {navLinks.map((navLink) => (
        <a key={navLink} href={`/${navLink.toLowerCase()}`}>{navLink}</a>
        // <Link key={navLink} href={`/${navLink}`} 
        //   className={`navLink `}
        // />
      ))}
    </div>
  )
}

export default Nav