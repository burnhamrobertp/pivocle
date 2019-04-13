import {handleActions} from 'redux-actions'
import setCanvasReducer from './reducers/set-canvas-reducer'
import setCurrentCanvasReducer from './reducers/set-current-canvas-reducer'
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
      SET: setCanvasReducer,
      SET_CURRENT: setCurrentCanvasReducer,
    },
  },
  initialState,
)
