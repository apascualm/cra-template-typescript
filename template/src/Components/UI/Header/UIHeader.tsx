import { NavLink } from 'react-router-dom'
import styles from './UIHeader.module.scss'
import { useEffect, useRef, useState } from 'react'

export function UIHeader() {
  const [mobile, setMobile] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const menuRef = useRef<HTMLElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const watchWindow = () => {
      void (window.innerWidth < 840 ? setMobile(true) : [setMobile(false), setMenuVisible(false)])
    }

    const clickOutOfMenu = (event: MouseEvent) => {
        if (!mobile) return
        if (!menuVisible) {
          if (buttonRef.current && buttonRef.current.contains(event.target as Node)) setMenuVisible(prevState => !prevState)
          return
        }
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuVisible(prevState => !prevState)
    }
    watchWindow()

    window.addEventListener('resize', watchWindow)
    window.addEventListener('click', clickOutOfMenu)
    return () => {
      window.removeEventListener('resize', watchWindow)
      window.removeEventListener('click', clickOutOfMenu)
    }
  })

  const title = mobile ? 'FC React' : 'Fast Create React'

  const navigation: string[] = [mobile ? 'mobileMenu' : 'headerMenu']
  if (menuVisible) navigation.push('active')

  return (
    <header className={styles.Header}>
      <div>{title}</div>
      <nav className={navigation.join(' ')} ref={menuRef}>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='use'>Use</NavLink>
          </li>
          <li>
            <NavLink to='features'>Features</NavLink>
          </li>
          <li>
            <NavLink to='clock'>Clock</NavLink>
          </li>
          <li>
            <a target='_blank' href={'https://reactjs.org/'} rel='noreferrer'>
              React JS
            </a>
          </li>
          <li>
            <a target='_blank' title='GitHub Profile' rel='noreferrer' href={'https://github.com/apascualm/'}>
              About Me
            </a>
          </li>
        </ul>
      </nav>

      {!menuVisible && mobile && (
        <button className='menuToggle' ref={buttonRef} title='Show menu' aria-label='menu nav'>
          ⌘
        </button>
      )}
    </header>
  )
}
