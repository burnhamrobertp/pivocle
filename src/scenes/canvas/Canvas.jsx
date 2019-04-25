import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'

import { getCanvas } from 'state/canvas/selectors/accessors'
import { setNode, moveNode, removeNode } from 'state/nodes/actions'
import { getCanvasNodes } from 'state/nodes/selectors/accessors'
import { newNode } from 'state/nodes/reducer'

import Node from './node/Node'
import DebugButton from './components/DebugButton'
import SaveButton from './components/SaveButton'
import LoadButton from './components/LoadButton'
import NewButton from './components/NewButton'
import styles from './canvas.module.scss'

class Canvas extends React.PureComponent {
  static propTypes = {
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

  allowDrop = e => {
    e.preventDefault()
  }

  render() {
    const { nodeIds } = this.props

    console.log('nodeIds', nodeIds)

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

            <div className={styles.canvas} onDragOver={this.allowDrop}>
              {nodeIds.map(nodeId => (
                <Node key={nodeId} nodeId={nodeId} />
              ))}
            </div>
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

// connected component
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
)(Canvas)
