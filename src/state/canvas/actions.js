import { createAction } from 'redux-actions'
import store from 'store/dist/store.modern'
import { setNodes } from '../nodes/actions'

const B = 'CANVAS'

export const setCanvas = createAction(`${B}/SET`)
export const setCurrentCanvas = createAction(`${B}/SET_CURRENT`);

export const saveCanvas = () => (dispatch, getState) => {
  const state = getState()
  const saveState = {
    canvas: state.canvas,
    nodes: state.nodes,
  }

  store.set(`canvas-${state.canvas.canvasId}`, {
    canvasId: state.canvas.canvasId,
    name: state.canvas.name,
    saveState,
  })
}

export const loadCanvas = id => dispatch => {
  const { saveState } = store.get(`canvas-${id}`)

  dispatch(setCanvas(saveState.canvas))
  dispatch(setNodes(saveState.nodes))
}