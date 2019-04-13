const setCanvasReducer = (state, { payload }) => ({
  ...state,
  index: {
    ...state.index,
    [payload.canvas.canvasId]: payload.canvas,
  },
})

export default setCanvasReducer
