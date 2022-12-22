import styles from './ErrorPages.module.scss'

export function NotFoundErrorPage() {
  return (
    <section className={styles.NotFoundErrorPage}>
      <h1>
        <span className='wave'>4</span>
        <span className='wave'>0</span>
        <span className='wave'>4</span>
      </h1>
      <div>
        <p>Oops...</p>
        <p>Page not Found</p>
      </div>
    </section>
  )
}
