const setStateCanvasReducer = (state, { payload }) => ({
  currentId: payload.currentId,
  index: {
    ...state.index,
    ...payload.index,
  },
})

export default setStateCanvasReducer
