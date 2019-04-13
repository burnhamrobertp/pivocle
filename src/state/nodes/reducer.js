import { handleActions } from 'redux-actions'
import setNodesReducer from './reducers/set-nodes-reducer'
import setNodeReducer from './reducers/set-node-reducer'
import moveNodeReducer from './reducers/move-node-reducer'
import removeNodeReducer from './reducers/remove-node-reducer'
import v4 from 'uuid'

const initialState = {
  index: {},
  canvas: {},
}

export const newNode = ({ x, y }) => ({
  nodeId: v4(),
  title: '',
  description: '',
  x,
  y,
})

export default handleActions(
  {
    NODES: {
      SET_ALL: setNodesReducer,
      SET: setNodeReducer,
      MOVE: moveNodeReducer,
      REMOVE: removeNodeReducer,
    },
  },
  initialState
)
