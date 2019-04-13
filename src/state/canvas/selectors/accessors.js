export const getCanvases = state => state.canvas.index
export const getCanvas = (state, { canvasId }) => {
  const canvases = getCanvases(state)
  return canvases ? canvases[canvasId] : undefined
}
export const getCurrentCanvasId = state => state.canvas.current