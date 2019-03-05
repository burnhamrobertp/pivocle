import { handleActions } from 'redux-actions'
import setCanvasReducer from './reducers/set-canvas-reducer'
import v4 from 'uuid'

const initialState = {
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
    },
  },
  initialState
)
