import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { DropTarget } from 'react-dnd'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import v4 from 'uuid'

import { getCanvas } from 'state/canvas/selectors/accessors'
import { setNode, moveNode, removeNode } from 'state/nodes/actions'
import { getNodes } from 'state/nodes/selectors/accessors'

import { nodeTarget, collect } from './canvas-dnd'
import DebugButton from './components/DebugButton'
import Node from './node/Node'
import styles from './canvas.module.scss'
import SaveButton from './components/SaveButton'
import LoadButton from './components/LoadButton'

class Canvas extends React.PureComponent {
  static propTypes = {
    // from react-dnd context
    connectDropTarget: T.func.isRequired,
    // from redux
    canvas: T.shape({
      canvasId: T.string.isRequired,
      name: T.string.isRequired,
    }),
    nodes: T.objectOf(T.object),
    setNode: T.func.isRequired,
    moveNode: T.func.isRequired,
    removeNode: T.func.isRequired,
  }

  addNode = e => {
    const nodeId = v4()
    this.props.setNode({
      nodeId,
      node: {
        nodeId,
        x: e.clientX,
        y: e.clientY,
      },
    })
  }

  moveNode(nodeId, x, y) {
    this.props.moveNode({ nodeId, x, y })
  }

  render() {
    const { nodes, connectDropTarget } = this.props

    return (
      <React.Fragment>
        <ContextMenuTrigger
          id="canvas-menu"
          attributes={{ className: styles.contextMenuWrapper }}
        >
          <div className={styles.canvas}>
            <LoadButton />
            <SaveButton />
            <DebugButton />
            {connectDropTarget(
              <div className={styles.canvas}>
                {Object.values(nodes).map(node => (
                  <Node
                    key={node.nodeId}
                    id={node.nodeId}
                    x={node.x}
                    y={node.y}
                  />
                ))}
              </div>
            )}
          </div>
        </ContextMenuTrigger>

        <ContextMenu id="canvas-menu" className={styles.contextMenu}>
          <MenuItem
            onClick={this.addNode}
            attributes={{ className: styles.contextMenuRow }}
          >
            New Node
          </MenuItem>
        </ContextMenu>
      </React.Fragment>
    )
  }
}

// react-dnd component
const CanvasWithDrop = DropTarget('Node', nodeTarget, collect)(Canvas)

const mapStateToProps = state => ({
  canvas: getCanvas(state),
  nodes: getNodes(state),
})

const mapDispatchToProps = {
  setNode,
  moveNode,
  removeNode,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasWithDrop)
