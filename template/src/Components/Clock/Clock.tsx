import { useEffect, useState } from 'react'
import { AnalogClock } from '@components/Clock/Digital/AnalogClock'
import styles from './Clock.module.scss'
import { MenuButton } from '@components/UI/Menu/MenuButton'
import { DigitalClock } from '@components/Clock/Digital/DigitalClock'

export function Clock() {
  const [date, setDate] = useState(new Date())
  const [digital, setDigital] = useState(false)
  useEffect(() => {
    const clocking = setInterval(() => {
      setDate(new Date())
    }, 100)
    return () => {
      clearInterval(clocking)
    }
  }, [])
  
  return (
    <>
      <div className={styles.ClockComponent}>
        {digital?<DigitalClock date={date}/>:<AnalogClock date={date}/>}
        <MenuButton>
          <ul>
            <li onClick={() => {setDigital(prevState => !prevState)}}>Analog</li>
            <li onClick={() => {setDigital(prevState => !prevState)}}>Digital</li>
          </ul>
        </MenuButton>
      </div>
    </>
  )
}
