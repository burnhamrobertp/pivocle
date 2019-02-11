import { handleActions } from 'redux-actions'
import addNodeReducer from './reducers/add-node-reducer'
import removeNodeReducer from './reducers/remove-node-reducer'
import setNodeReducer from './reducers/set-node-reducer'

const initialState = {
  index: {},
}

export default handleActions(
  {
    NODES: {
      ADD: addNodeReducer,
      REMOVE: removeNodeReducer,
      SET: setNodeReducer,
    },
  },
  initialState
)
