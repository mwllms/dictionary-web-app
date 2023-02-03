import Image from 'next/image'
import Menu from './Menu'
import ToggleTheme from './ToggleTheme'

export default function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-6'>
      <Image src='logo.svg' alt='Dictionary Web App' width={28} height={32} />
      <div className='flex h-8 items-center divide-x divide-gray-200'>
        <div className='px-4'>
          <Menu />
        </div>
        <div className='pl-4'>
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}
