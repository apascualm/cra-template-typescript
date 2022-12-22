import { useRouteError } from 'react-router-dom'
import { NotFoundErrorPage } from '@pages/Error/NotFoundErrorPage'
import { InternalErrorPage } from '@pages/Error/InternalErrorPage'

export function BaseErrorElement() {
  const error = useRouteError() as { status?: number }
  let component = <InternalErrorPage />
  switch (error.status) {
    case 404:
      component = <NotFoundErrorPage />
  }
  return component
}
