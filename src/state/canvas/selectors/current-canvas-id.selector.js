import { createSelector } from 'reselect'
import { getCanvas } from './accessors'

const currentCanvasIdSelector = createSelector(
  getCanvas,
  canvas => canvas && canvas.canvasId,
)

export default currentCanvasIdSelector