import styles from './ErrorPages.module.scss'

export function InternalErrorPage() {
  return (
    <section className={styles.InternalErrorPage}>
      <h1>
        <span className='wave'>5</span>
        <span className='wave'>0</span>
        <span className='wave'>0</span>
      </h1>
      <div>
        <p>Oops...</p>
        <p>An internal error happened.</p>
        <p>Please, try again later.</p>
      </div>
    </section>
  )
}
