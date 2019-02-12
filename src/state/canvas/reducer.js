import { handleActions } from 'redux-actions'
import setCanvasReducer from './reducers/set-canvas-reducer'

const initialState = {
  canvasId: null,
  name: null,
}

export default handleActions(
  {
    CANVAS: {
      SET: setCanvasReducer,
    },
  },
  initialState
)
