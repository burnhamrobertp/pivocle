const setNodeReducer = (state, { payload }) => {
  const { canvasId, node } = payload
  const canvasNodes = state.canvas[canvasId] || []

  return {
    ...state,
    index: {
      ...state.index,
      [node.nodeId]: payload.node,
    },
    canvas: {
      ...state.canvas,
      [canvasId]: [
        ...canvasNodes,
        node.nodeId,
      ],
    },
  }
}

export default setNodeReducer
