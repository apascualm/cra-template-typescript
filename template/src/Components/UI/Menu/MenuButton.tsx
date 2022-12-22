import { ReactNode, useRef, useState } from 'react'
import styles from './MenuButton.module.scss'

export function MenuButton({children}:{children?:ReactNode}) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [active, setActive] = useState(false)
  return (
    <button className={styles.MenuButton} ref={buttonRef} onClick={()=>{setActive(prevState => !prevState)}}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <menu className={active?'active':''}>
        {children}
      </menu>
    </button>
  )
}