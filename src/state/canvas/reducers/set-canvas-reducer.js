const setCanvasReducer = (state, { payload }) => ({
  ...state,
  index: {
    ...state.index,
    [payload.canvasId]: payload.canvas,
  },
})

export default setCanvasReducer
