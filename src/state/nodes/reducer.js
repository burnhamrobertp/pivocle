import { handleActions } from 'redux-actions'
import setStateNodesReducer from './reducers/set-state-nodes-reducer'
import setNodeReducer from './reducers/set-node-reducer'
import setNodeTitleReducer from './reducers/set-node-title-reducer'
import setNodeDescriptionReducer from './reducers/set-node-description-reducer'
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
      SET_STATE: setStateNodesReducer,
      SET: setNodeReducer,
      SET_TITLE: setNodeTitleReducer,
      SET_DESCRIPTION: setNodeDescriptionReducer,
      MOVE: moveNodeReducer,
      REMOVE: removeNodeReducer,
    },
  },
  initialState
)
