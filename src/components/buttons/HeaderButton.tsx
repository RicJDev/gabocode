import './Button.css'
import { useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'

export function HeaderButton() {
  const [isOpen, setIsOpen] = useState(false)
  const $mainNav = document.querySelector('.main-nav')

  function toggle() {
    setIsOpen(!isOpen)
    $mainNav?.classList.toggle('openned')
  }

  return (
    <button
      style={{
        border: 0,
        background: 'var(--background)',
        color: 'var(--accent)',
      }}
      onClick={toggle}
      className="header-open-button"
    >
      {isOpen ? <IconX className="header-icon" /> : <IconMenu2 className="header-icon" />}
    </button>
  )
}
