import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'

import { getCanvas } from 'state/canvas/selectors/accessors'
import { setNode, removeNode } from 'state/nodes/actions'
import { getCanvasNodes } from 'state/nodes/selectors/accessors'
import { newNode } from 'state/nodes/reducer'

import Node from './node/Node'
import DebugButton from './components/DebugButton'
import SaveButton from './components/SaveButton'
import LoadButton from './components/LoadButton'
import NewButton from './components/NewButton'
import styles from './canvas.module.scss'
import DropableCanvas from './DropableCanvas'

class Canvas extends React.PureComponent {
  static propTypes = {
    // from redux
    canvas: T.shape({
      canvasId: T.string.isRequired,
      name: T.string.isRequired
    }),
    nodeIds: T.arrayOf(T.string),
    setNode: T.func.isRequired,
    removeNode: T.func.isRequired
  }

  addNode = ({ clientX: x, clientY: y }) => {
    const { canvasId } = this.props.canvas
    const node = newNode({ canvasId, x, y })

    this.props.setNode({ canvasId, node })
  }

  render() {
    const { nodeIds } = this.props

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

            <DropableCanvas className={styles.canvas}>
              {nodeIds.map(nodeId => (
                <Node key={nodeId} nodeId={nodeId} />
              ))}
            </DropableCanvas>
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
  nodeIds: getCanvasNodes(state, props)
})

const mapDispatchToProps = {
  setNode,
  removeNode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)
