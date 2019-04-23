const deleteCanvasReducer = (state, { payload }) => ({
  ...state,
  index: {
    ...state.index,
    [payload.canvasId]: undefined,
  },
})

export default deleteCanvasReducer
