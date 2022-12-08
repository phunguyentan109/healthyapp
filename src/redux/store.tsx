import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { ROUTE_PERMISSION, SESSION_AUTH } from '../constant'
import { AsyncReducer, IStore, Global } from './type'

const sagaMiddleware = createSagaMiddleware()

const INIT_VALUES: Global = {
  name: '',
  email: '',
  roles: { [ROUTE_PERMISSION.login]: true },
}

const appSlice = createSlice({
  name: 'global',
  initialState: INIT_VALUES,
  reducers: {
    join: (state, action: PayloadAction<{ [key: string]: any }>) => {
      let authValue =
        action.payload ||
        JSON.parse(sessionStorage.getItem(SESSION_AUTH) as string) ||
        INIT_VALUES

      state.name = authValue?.name
      state.email = authValue?.email
      state.roles = authValue?.roles
    },
  },
})

export const { join } = appSlice.actions

export const store: IStore = configureStore({
  reducer: {
    global: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

function createReducer(asyncReducers: any) {
  return combineReducers({
    app: appSlice.reducer,
    ...asyncReducers,
  })
}

store.asyncReducers = {} as AsyncReducer
store.injectReducer = (key: string, asyncReducer: AsyncReducer) => {
  store.asyncReducers[key] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers) as any)
}

sagaMiddleware.run(rootSaga)
