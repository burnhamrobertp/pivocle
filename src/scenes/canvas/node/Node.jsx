import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { withConfigContext } from 'config/config-context'
import { getNode } from 'state/nodes/selectors/accessors'
import { moveNode } from 'state/nodes/actions'
import NodeTitle from './components/NodeTitle'
import NodeDescription from './components/NodeDescription'
import styles from './node.module.scss'

class Node extends React.PureComponent {
  static propTypes = {
    // from redux
    node: T.shape({
      nodeId: T.string.isRequired,
      x: T.number.isRequired,
      y: T.number.isRequired
    }).isRequired,
    moveNode: T.func.isRequired,
    // from config context
    debug: T.bool.isRequired
  }

  handleDragStart = e => {
    // store an offset of the mouse, relative to the target
    this.offsetX = e.clientX - e.target.offsetLeft
    this.offsetY = e.clientY - e.target.offsetTop
  }

  handleDrop = e => {
    const { nodeId } = this.props.node

    this.props.moveNode({
      nodeId,
      x: e.clientX - this.offsetX,
      y: e.clientY - this.offsetY
    })
    // reset offset values
    this.offsetX = this.offsetY = undefined
  }

  render() {
    const { debug } = this.props
    const { nodeId, x, y } = this.props.node

    return (
      <div
        className={styles.node}
        style={{ width: '225px', top: y, left: x }}
        draggable
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDrop}
      >
        <header>
          <NodeTitle nodeId={nodeId} />
        </header>
        <section>
          <NodeDescription nodeId={nodeId} />
        </section>
        {debug && (
          <code className={styles.debug}>
            {x}, {y}
          </code>
        )}
      </div>
    )
  }
}

// connected component below
const mapStateToProps = (state, props) => ({
  node: getNode(state, props)
})
const mapDispatchToProps = {
  moveNode
}

const NodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Node)

export default withConfigContext(['debug'])(NodeContainer)
