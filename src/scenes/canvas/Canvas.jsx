import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { DropTarget } from 'react-dnd'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'

import { getCanvas } from 'state/canvas/selectors/accessors'
import { setNode, moveNode, removeNode } from 'state/nodes/actions'
import { getCanvasNodes } from 'state/nodes/selectors/accessors'
import { newNode } from 'state/nodes/reducer'

import { nodeTarget, collect } from './canvas-dnd'
import DebugButton from './components/DebugButton'
import Node from './node/Node'
import SaveButton from './components/SaveButton'
import LoadButton from './components/LoadButton'
import styles from './canvas.module.scss'
import NewButton from './components/NewButton'

class Canvas extends React.PureComponent {
  static propTypes = {
    // from react-dnd context
    connectDropTarget: T.func.isRequired,
    // from redux
    canvas: T.shape({
      canvasId: T.string.isRequired,
      name: T.string.isRequired,
    }),
    nodeIds: T.arrayOf(T.string),
    setNode: T.func.isRequired,
    moveNode: T.func.isRequired,
    removeNode: T.func.isRequired,
  }

  addNode = ({ clientX: x, clientY: y }) => {
    const { canvasId } = this.props.canvas
    const node = newNode({ canvasId, x, y })

    this.props.setNode({ canvasId, node })
  }

  moveNode(nodeId, x, y) {
    this.props.moveNode({ nodeId, x, y })
  }

  render() {
    const { nodeIds, connectDropTarget } = this.props

    return (
      <React.Fragment>
        <ContextMenuTrigger
          id="canvas-menu"
          attributes={{ className: styles.contextMenuWrapper }}
        >
          <div className={styles.canvas}>
            <NewButton />
            <LoadButton />
            <SaveButton />
            <DebugButton />

            {connectDropTarget(
              <div className={styles.canvas}>
                {nodeIds.map(nodeId => (
                  <Node key={nodeId} nodeId={nodeId} />
                ))}
              </div>,
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

const mapStateToProps = (state, props) => ({
  canvas: getCanvas(state, props),
  nodeIds: getCanvasNodes(state, props),
})

const mapDispatchToProps = {
  setNode,
  moveNode,
  removeNode,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CanvasWithDrop)
