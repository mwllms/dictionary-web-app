'use client'
import Image from 'next/image'
import { Menu } from '@headlessui/react'

export default function FontMenu() {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='flex items-center space-x-4'>
        <div className='text-sm font-bold'>Sans Serif</div>
        <Image src='/icons/icon-arrow-down.svg' alt='Select font' width={12} height={6} />
      </Menu.Button>
      <Menu.Items className='absolute right-0 flex w-[180px] translate-y-3 flex-col space-y-4 rounded-2xl bg-white p-6 shadow-lg'>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'text-purple'} font-sans text-sm font-bold`} href='#'>
              Sans Serif
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'text-purple'} font-serif text-sm font-bold`} href='#'>
              Serif
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'text-purple'} font-mono text-sm font-bold`} href='#'>
              Mono
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
