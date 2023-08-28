import Nav from './Nav';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="flex items-center m-4">
      <Nav />
      {/* <h1 className="text-4xl">Lilu&apos;s App</h1> */}
      <MagnifyingGlassIcon className="w-8 h-8 cursor-pointer" />
    </header>
  )
}

export default Header