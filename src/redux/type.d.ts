import { Store } from 'redux'

export interface IStore extends Store {
  asyncReducers?: any
  injectReducer?: (key: string, asyncReducer: AsyncReducer) => void
}

export type AsyncReducer = { [key: string]: any }

export type Global = {
  email: string
  name: string
  roles: { [key: string]: boolean }
}

export type App = {
  global: Global
}
