'use client'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'

export default function ToggleTheme() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='flex items-center space-x-4'>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-purple' : 'bg-gray-400'}
          relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
      >
        <span className='sr-only'>Use setting</span>
        <span
          aria-hidden='true'
          className={`${enabled ? 'translate-x-[23px]' : 'translate-x-[3px]'}
            pointer-events-none inline-block h-3.5 w-3.5 translate-y-[3px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Image src='/icons/icon-moon.svg' alt='Set to dark theme' width={20} height={20} />
    </div>
  )
}
