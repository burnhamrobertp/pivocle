const moveNodeReducer = (state, { payload: { nodeId, x, y } }) => ({
  ...state,
  index: {
    ...state.index,
    [nodeId]: {
      ...state.index[nodeId],
      x,
      y,
    },
  },
})

export default moveNodeReducer
