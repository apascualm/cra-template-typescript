import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Router } from '@src/Router/Router'

/**
 * If you do not use react-snap for static page, you could change to the next line.
 *
 * const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
 * root.render(
 *   <React.StrictMode>
 *     <Router />
 *   </React.StrictMode>
 * )
 *
 */

const rootElement = document.getElementById('root') as HTMLElement
if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  )
} else {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
