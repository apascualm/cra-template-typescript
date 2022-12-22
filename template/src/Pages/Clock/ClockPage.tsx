import { Page } from '@components/Page/Page'
import { Clock } from '@components/Clock/Clock'
import styles from './Clock.module.scss'

export function ClockPage() {
  return (
    <Page className={styles.ClockPage}>
      <article>
        <h1>
          Clock Component
          <small>A funny example 🥳</small>
        </h1>

        <Clock />
      </article>
    </Page>
  )
}
