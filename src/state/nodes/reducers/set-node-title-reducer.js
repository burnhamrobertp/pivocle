const setNodeTitleReducer = (state, { payload: { nodeId, title } }) => ({
  ...state,
  index: {
    ...state.index,
    [nodeId]: {
      ...state.index[nodeId],
      title,
    },
  },
})

export default setNodeTitleReducer
