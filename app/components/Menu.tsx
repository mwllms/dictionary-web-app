'use client'
import Image from 'next/image'
import { Menu } from '@headlessui/react'

export default function FontMenu() {
  return (
    <Menu>
      <Menu.Button className='flex items-center space-x-4'>
        <div className='text-sm font-bold'>Sans Serif</div>
        <Image src='/icons/icon-arrow-down.svg' alt='Select font' width={12} height={6} />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'bg-purple'}`} href='/account-settings'>
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'bg-purple'}`} href='/account-settings'>
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className='opacity-75'>Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
