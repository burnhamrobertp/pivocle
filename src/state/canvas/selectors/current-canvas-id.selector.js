import { createSelector } from 'reselect'
import makeCanvasSelector from './make-canvas-selector'

const currentCanvasIdSelector = createSelector(
  makeCanvasSelector(),
  canvas => canvas && canvas.canvasId,
)

export default currentCanvasIdSelector