import { combineReducers } from 'redux'
import app from './app/reducer'
import canvas from './canvas/reducer'
import nodes from './nodes/reducer'

export default combineReducers({
  app,
  canvas,
  nodes,
})
