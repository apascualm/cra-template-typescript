import { useMemo, useState } from 'react'
import styles from '../Clock.module.scss'

export function DigitalClock({ date }: { date: Date }) {
  const [hour, setHour] = useState('0')
  const [minute, setMinute] = useState('0')
  const [second, setSecond] = useState('0')

  useMemo(() => {
    setHour(date.getHours().toString().padStart(2, '0'))
  }, [date.getHours()])

  useMemo(() => {
    setMinute(date.getMinutes().toString().padStart(2, '0'))
  }, [date.getMinutes()])

  useMemo(() => {
    setSecond(date.getSeconds().toString().padStart(2, '0'))
  }, [date.getSeconds()])

  return (
    <div className={styles.DigitalClockContainer}>
      <div className={styles.Hours}>{hour}</div>
      <div>:</div>
      <div className={styles.Minutes}>{minute}</div>
      <div>:</div>
      <div className={styles.Seconds}>{second}</div>
    </div>
  )
}
