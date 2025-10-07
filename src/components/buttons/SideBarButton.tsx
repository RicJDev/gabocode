import './Button.css'
import { useState } from 'react'
import { IconLayoutSidebar, IconLayoutSidebarLeftCollapse } from '@tabler/icons-react'

export function SidebarButton() {
  const [isOpen, setIsOpen] = useState(false)
  const $sectionNav = document.querySelector('.section-nav')

  function toggle() {
    setIsOpen(!isOpen)
    $sectionNav?.classList.toggle('oppened')
  }

  return (
    <button
      style={{
        border: 0,
        background: 'var(--background)',
        color: 'var(--accent)',
      }}
      onClick={toggle}
      className="sidebar-open-button"
    >
      {isOpen ? (
        <IconLayoutSidebarLeftCollapse className="sidebar-icon" />
      ) : (
        <IconLayoutSidebar className="sidebar-icon" />
      )}
    </button>
  )
}
