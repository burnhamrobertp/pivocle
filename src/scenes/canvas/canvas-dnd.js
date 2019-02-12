export const nodeTarget = {
  drop: (props, monitor, component) => {
    if (!component) {
      return
    }
    const item = monitor.getItem()
    const delta = monitor.getDifferenceFromInitialOffset()
    const x = Math.round(item.x + delta.x)
    const y = Math.round(item.y + delta.y)

    component.moveNode(item.id, x, y)
  },
}

export const collect = connect => ({
  connectDropTarget: connect.dropTarget(),
})
