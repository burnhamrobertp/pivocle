import React from 'react'
import T from 'prop-types'
import { DropTarget } from 'react-dnd'
import v4 from 'uuid'
import Node from './node/Node'
import styles from './canvas.module.scss'
import { withConfigContext } from '../../config/config-context'

import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import DebugButton from './components/DebugButton'

class Canvas extends React.PureComponent {
  static propTypes = {
    debug: T.bool.isRequired,
  }

  state = {
    nodes: {
      a: { id: 'a', x: 80, y: 20 },
      b: { id: 'b', x: 20, y: 180 },
    },
  }

  addNode = e => {
    const x = e.clientX
    const y = e.clientY
    const id = v4()

    this.setState(state => ({
      nodes: {
        ...state.nodes,
        [id]: { id, x, y },
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

    return (
      <React.Fragment>
        <DebugButton />
        {connectDropTarget(
          <div className={styles.canvas}>
            <ContextMenuTrigger
              id="canvas-menu"
              attributes={{ className: styles.contextMenuWrapper }}
            >
              <div className={styles.canvas}>
                {Object.values(nodes).map(node => (
                  <Node key={node.id} id={node.id} x={node.x} y={node.y} />
                ))}
              </div>
            </ContextMenuTrigger>

            <ContextMenu id="canvas-menu">
              <MenuItem onClick={this.addNode}>New Node</MenuItem>
            </ContextMenu>
          </div>
        )}
      </React.Fragment>
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

export default withConfigContext(['debug'])(
  DropTarget('Node', nodeTarget, collect)(Canvas)
)
