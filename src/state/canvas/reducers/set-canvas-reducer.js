const setCanvasReducer = (state, { payload }) => ({
  ...state,
  ...payload.canvas,
})

export default setCanvasReducer
