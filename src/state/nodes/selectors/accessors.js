export const getCanvasNodes = (state, { canvasId }) => state.nodes.canvas[canvasId] || []
export const getNode = (state, { nodeId }) => state.nodes.index[nodeId]
