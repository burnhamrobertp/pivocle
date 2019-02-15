import { createAction } from 'redux-actions'
import store from 'store/dist/store.modern'

const B = 'CANVAS'

export const setCanvas = createAction(`${B}/SET`)

export const saveCanvas = () => (dispatch, getState) => {
  console.log(store);
  console.log('saveCanvas', getState())
}
export const loadCanvas = id => (dispatch) => {
  console.log('load canvas', id)
}