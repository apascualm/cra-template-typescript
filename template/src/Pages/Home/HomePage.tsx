import { Page } from '@components/Page/Page'
import logo from '@assets/logo.svg'
import React from 'react'
import styles from './HomePage.module.scss'

export function HomePage() {
  return (
    <Page className={styles.HomePage}>
      <h1>
        <strong>Fast Create React </strong>
        <br />
        is a template for react with Vitamins.
      </h1>
      <div className='App-logo'>
        <img src={logo} alt='react logo' /> <span>+ 💊</span>
      </div>
      <p>
        Start exploring the folder structure and editing this page{' '}
        <code>src/Pages/HomePage.tsx</code>.
      </p>
    </Page>
  )
}
