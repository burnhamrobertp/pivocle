const setNodeReducer = (state, { payload }) => ({
  ...state,
  index: {
    [payload.nodeId]: payload.node,
  },
})

export default setNodeReducer
