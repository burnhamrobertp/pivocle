import React from 'react'
import { DropTarget } from 'react-dnd'
import v4 from 'uuid'
import Node from './node/Node'
import styles from './canvas.module.scss'

class Canvas extends React.PureComponent {
  state = {
    nodes: {
      a: { id: 'a', x: 80, y: 20 },
      b: { id: 'b', x: 20, y: 180 },
    },
  }

  addNode = () => {
    const id = v4()
    this.setState(state => ({
      nodes: {
        ...state.nodes,
        [id]: {
          id,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      },
    }))
  }

  moveNode(id, x, y) {
    this.setState(({ nodes }) => ({
      nodes: {
        ...nodes,
        [id]: {
          ...nodes[id],
          x,
          y,
        },
      },
    }))
  }

  render() {
    const { connectDropTarget } = this.props
    const { nodes } = this.state

    return connectDropTarget(
      <div className={styles.canvas}>
        <button onClick={this.addNode}>New Node</button>

        {Object.values(nodes).map(node => (
          <Node key={node.id} id={node.id} x={node.x} y={node.y} />
        ))}
      </div>
    )
  }
}

// react-dnd components
const nodeTarget = {
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

const collect = connect => ({
  connectDropTarget: connect.dropTarget(),
})

export default DropTarget('Node', nodeTarget, collect)(Canvas)
