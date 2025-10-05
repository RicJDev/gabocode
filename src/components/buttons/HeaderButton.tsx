import './HeaderButton.css'
import { useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'

export function HeaderButton() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <button
      style={{
        border: 0,
        background: 'var(--background)',
        color: 'var(--accent)',
      }}

      onClick={toggle}
    >
      {isOpen ? <IconX className='header-icon' /> : <IconMenu2 className='header-icon' />}
    </button>
  )
}
