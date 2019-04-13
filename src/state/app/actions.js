import { createAction } from 'redux-actions'
import store from 'store/dist/store.modern'
import { setCanvas, setCurrentCanvas, setState as setCanvasState } from '../canvas/actions'
import { setState as setNodeState } from '../nodes/actions'
import { newCanvas } from '../canvas/reducer'

const B = 'APP'

export const saveState = () => (dispatch, getState) => {
  const state = getState()
  const saveState = {
    canvas: state.canvas,
    nodes: state.nodes,
  }

  store.set('saveState', saveState)
}

export const loadState = () => dispatch => {
  const saveState = store.get('saveState')

  if (saveState) {
    dispatch(setCanvasState(saveState.canvas))
    dispatch(setNodeState(saveState.nodes))
  } else {
    const canvas = newCanvas()
    dispatch(setCanvas({ canvas }))
    dispatch(setCurrentCanvas({ canvasId: canvas.canvasId }))
  }
}