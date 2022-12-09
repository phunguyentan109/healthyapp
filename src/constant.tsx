import { ReactElement } from 'react'
import ColumnPage from './views/ColumnPage'
import TopPage from './views/TopPage'
import MyRecord from './views/MyRecord'
import { Navigate } from 'react-router-dom'

export const SESSION_AUTH = 'healthySession'

export const ROUTE_PERMISSION = {
  login: 'perm.login',
  record: 'perm.chat',
  top: 'perm.about',
}

export type IRouter = {
  path: string
  element: ReactElement
}

export const allRouters: IRouter[] = [
  {
    path: '/column',
    element: <ColumnPage />,
  },
  {
    path: '/',
    element: <TopPage />,
  },
  {
    path: '/record',
    element: <MyRecord />,
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  },
]
