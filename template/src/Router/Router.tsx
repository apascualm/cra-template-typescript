import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@src/Router/Routes'

/**
 * We use Hash Router for GitHub Pages deployment, but you can use BrowserRouter
 *
 * const router = createBrowserRouter(routes)
 */

const router = createHashRouter(routes)

export function Router() {
  return <RouterProvider router={router} />
}
