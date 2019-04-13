const setNodeDescriptionReducer = (state, { payload: { nodeId, description } }) => ({
  ...state,
  index: {
    ...state.index,
    [nodeId]: {
      ...state.index[nodeId],
      description,
    },
  },
})

export default setNodeDescriptionReducer
