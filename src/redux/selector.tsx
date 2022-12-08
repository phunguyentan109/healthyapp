import { App, Global } from './type'

export const selectApp = (state: App) => ({ ...state.global } as Global)
