import styles from '../Clock.module.scss'
import { useMemo, useState } from 'react'

export function AnalogClock({ date }: { date: Date }) {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const dateHours = date.getHours()
  const dateMinutes = date.getMinutes()
  const dateSeconds = date.getSeconds()

  useMemo(() => {
    let result = (dateHours > 12 ? dateHours - 12 : dateHours) * 60
    result += dateMinutes
    result = (360 / (12 * 60)) * result
    setHour(Math.round(result * 10) / 10)
  }, [dateHours, dateMinutes])

  useMemo(() => {
    setMinute(Math.round((360 / 60) * dateMinutes * 10) / 10)
  }, [dateMinutes])

  useMemo(() => {
    setSecond(Math.round((360 / 60) * dateSeconds * 10) / 10)
  }, [dateSeconds])

  return (
    <div className={styles.AnalogClockContainer}>
      <svg height='250' version='1.1' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
        <defs />
        <g id='Clock' className='clock'>
          <circle r={122} cx={'50%'} cy={'50%'} />
        </g>
        <g id='Seconds' className='seconds'>
          <line
            x1={'50%'}
            y1={'50%'}
            x2={'50%'}
            y2={'13%'}
            style={{ transform: `rotate(${second}deg)` }}
          />
        </g>
        <g id='Minutes' className='minutes'>
          <line
            x1={'50%'}
            y1={'50%'}
            x2={'50%'}
            y2={'20%'}
            style={{ transform: `rotate(${minute}deg)` }}
          />
        </g>
        <g id='Hours' className='hours'>
          <line
            x1={'50%'}
            y1={'50%'}
            x2={'50%'}
            y2={'27%'}
            style={{ transform: `rotate(${hour}deg)` }}
          />
        </g>
      </svg>
    </div>
  )
}
