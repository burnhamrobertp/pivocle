const removeNodeReducer = (state, { payload }) => ({
  ...state,
  index: {
    [payload.nodeId]: {
      ...payload.node,
      deleted: true,
    },
  },
})

export default removeNodeReducer
