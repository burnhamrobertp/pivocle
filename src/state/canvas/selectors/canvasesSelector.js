import { createSelector } from 'reselect'
import { getCanvases } from './accessors'

const canvasesSelector = createSelector(
  getCanvases,
  canvases => {
    if (canvases) {
      return Object.values(canvases)
    }
  }
)

export default canvasesSelector
