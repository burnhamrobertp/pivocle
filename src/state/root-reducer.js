import { combineReducers } from 'redux'
import canvas from './canvas/reducer'
import nodes from './nodes/reducer'

export default combineReducers({
  canvas,
  nodes,
})
