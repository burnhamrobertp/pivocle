import { handleActions } from 'redux-actions'
import setStateCanvasReducer from './reducers/set-state-canvas-reducer'
import setCanvasReducer from './reducers/set-canvas-reducer'
import setCurrentCanvasReducer from './reducers/set-current-canvas-reducer'
import deleteCanvasReducer from './reducers/delete-canvas-reducer'
import v4 from 'uuid'

const initialState = {
  currentId: undefined,
  index: {},
}

export const newCanvas = () => ({
  canvasId: v4(),
  name: 'Untitled Canvas',
})

export default handleActions(
  {
    CANVAS: {
      SET_STATE: setStateCanvasReducer,
      SET: setCanvasReducer,
      SET_CURRENT: setCurrentCanvasReducer,
      DELETE: deleteCanvasReducer
    },
  },
  initialState,
)
