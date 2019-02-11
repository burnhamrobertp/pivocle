const addNodeReducer = (state, { payload }) => ({
  ...state,
  index: {
    [payload.node.id]: payload.node,
  },
})

export default addNodeReducer
