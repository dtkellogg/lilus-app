import Link from 'next/link';
import Nav from './Nav';
import { MagnifyingGlassIcon, HomeIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="flex items-center m-4">
      <Link href="/" prefetch={false}>
        <HomeIcon className="w-8 h-8 cursor-pointer" />
      </Link>
      <Nav />
      <MagnifyingGlassIcon className="w-8 h-8 cursor-pointer" />
    </header>
  )
}

export default Header