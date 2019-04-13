const setCurrentCanvasReducer = (state, { payload }) => ({
  ...state,
  currentId: payload.canvasId,
})

export default setCurrentCanvasReducer
