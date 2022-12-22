import { RouteObject } from 'react-router-dom'
import { EmptyLayout } from '@layout/EmptyLayout'
import { HomePage } from '@pages/Home/HomePage'
import { FeaturesPage } from '@pages/Features/FeaturesPage'
import { BaseErrorElement } from '@pages/Error/BaseErrorElement'
import { ClockPage } from '@pages/Clock/ClockPage'
import { NotFoundErrorPage } from '@pages/Error/NotFoundErrorPage'
import { UsePage } from '@pages/Use/UsePage'

function ErrorTest() {
  if (Math.random()) throw new Error('Deliberate Error')

  return <>test</>
}
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <EmptyLayout />,
    errorElement: <BaseErrorElement />,
    children: [
      {
        path: '',
        index: true,
        element: <HomePage />,
      },
      {
        path: 'features',
        element: <FeaturesPage />,
      },
      {
        path: 'clock',
        element: <ClockPage />,
      },
      {
        path: 'use',
        element: <UsePage />,
      },
      {
        path: 'error500',
        element: <ErrorTest />,
      },
      {
        path: '*',
        element: <NotFoundErrorPage />,
      },
    ],
  },
]
