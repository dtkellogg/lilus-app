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
    <div>
      <h1>NAV</h1>
      {navLinks.map((navLink) => (
        <div key={navLink}>{navLink}</div>
        // <Link key={navLink} href={`/${navLink}`} 
        //   className={`navLink `}
        // />
      ))}
    </div>
  )
}

export default Nav