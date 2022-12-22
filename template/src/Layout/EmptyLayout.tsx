import { Outlet } from 'react-router-dom'
import styles from './EmptyLayout.module.scss'
import { UIHeader } from '@components/UI/Header/UIHeader'
import { UIFooter } from '@components/UI/Footer/UIFooter'
export function EmptyLayout() {
  return (
    <div className={styles.EmptyLayout}>
      <UIHeader />
      <Outlet />
      <UIFooter />
    </div>
  )
}
