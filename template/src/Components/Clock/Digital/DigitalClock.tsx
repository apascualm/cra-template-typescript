import { useMemo, useState } from 'react'
import styles from '../Clock.module.scss'

export function DigitalClock({ date }: { date: Date }) {
  const [hour, setHour] = useState('0')
  const [minute, setMinute] = useState('0')
  const [second, setSecond] = useState('0')
  const dateHours = date.getHours()
  const dateMinutes = date.getMinutes()
  const dateSeconds = date.getSeconds()

  useMemo(() => {
    setHour(dateHours.toString().padStart(2, '0'))
  }, [dateHours])

  useMemo(() => {
    setMinute(dateMinutes.toString().padStart(2, '0'))
  }, [dateMinutes])

  useMemo(() => {
    setSecond(dateSeconds.toString().padStart(2, '0'))
  }, [dateSeconds])

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
