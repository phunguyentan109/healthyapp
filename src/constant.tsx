// import Login from 'views/Login'
// import Chat from 'views/Chat/Loader'

import { ReactElement } from 'react'
import ColumnPage from './views/ColumnPage'
import TopPage from './views/TopPage'

export const SESSION_AUTH = 'healthySession'

export const ROUTE_PERMISSION = {
  login: 'perm.login',
  record: 'perm.chat',
  top: 'perm.about',
}

export type IRouter = {
  path: string
  element: ReactElement
  notFoundRedirect?: boolean
  permission: string
}

export const allRouters: IRouter[] = [
  {
    path: '/',
    element: <ColumnPage />,
    notFoundRedirect: true,
    permission: ROUTE_PERMISSION.login,
  },
  {
    path: '/top',
    element: <TopPage />,
    permission: ROUTE_PERMISSION.top,
    notFoundRedirect: true,
  },
  {
    path: '/record',
    element: <div>About</div>,
    permission: ROUTE_PERMISSION.record,
  },
]
