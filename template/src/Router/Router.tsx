import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@src/Router/Routes'

const router = createBrowserRouter(routes)

export function Router() {
  return <RouterProvider router={router} />
}
