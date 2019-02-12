import { handleActions } from 'redux-actions'
import setNodeReducer from './reducers/set-node-reducer'
import moveNodeReducer from './reducers/move-node-reducer'
import removeNodeReducer from './reducers/remove-node-reducer'

const initialState = {
  index: {},
}

export default handleActions(
  {
    NODES: {
      SET: setNodeReducer,
      MOVE: moveNodeReducer,
      REMOVE: removeNodeReducer,
    },
  },
  initialState
)
