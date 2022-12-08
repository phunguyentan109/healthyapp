import { put, takeLatest } from 'redux-saga/effects'
import { logInAction, logOutAction } from './action'
import { SESSION_AUTH } from '../constant'
import { join } from './store'
import { PayloadAction } from '@reduxjs/toolkit'

function logInActionSaga({ payload }: PayloadAction<any>) {
  try {
    // sessionStorage.setItem(SESSION_AUTH, JSON.stringify(rs))
    // yield put(join(rs))
  } catch (e) {
    console.log('login err', e)
    sessionStorage.removeItem(SESSION_AUTH)
    // yield put(join())
  }
}

function* logOutSaga() {
  sessionStorage.removeItem(SESSION_AUTH)
  yield put(join({}))
}

export default function* rootSaga() {
  // App saga
  yield takeLatest(logInAction, logInActionSaga)
  yield takeLatest(logOutAction, logOutSaga)

  // View saga
  // yield all([chatSaga()])
}
