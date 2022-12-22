import { ReactNode } from 'react'
import styles from './page.module.scss'

export function Page({
  children,
  className,
}: {
  children: ReactNode
  className?: string | undefined
}) {
  let pageStyle = styles.page
  if (className) pageStyle = pageStyle.concat(' ', className)

  return <div className={pageStyle}>{children}</div>
}
