const setCurrentCanvasReducer = (state, {payload}) => ({
  ...state,
  current: payload.canvasId,
})

export default setCurrentCanvasReducer
