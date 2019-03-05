import { createSelector } from 'reselect'
import { getCanvases } from './accessors'

const makeCanvasSelector = () =>
  createSelector(
    (state, { canvasId }) => getCanvases(state)?.[canvasId],
    canvas => canvas,
  )

export default makeCanvasSelector
