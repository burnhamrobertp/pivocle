import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import { withConfigContext } from 'config/config-context'
import { getNode } from 'state/nodes/selectors/accessors'
import NodeTitle from './components/NodeTitle'
import NodeDescription from './components/NodeDescription'
import styles from './node.module.scss'

class Node extends React.PureComponent {
  static propTypes = {
    // from redux
    node: T.shape({
      nodeId: T.string.isRequired,
      x: T.number.isRequired,
      y: T.number.isRequired,
    }).isRequired,
    // from config context
    debug: T.bool.isRequired,
    // from dnd context
    connectDragSource: T.func.isRequired,
    isDragging: T.bool.isRequired,
  }

  render() {
    const { debug, connectDragSource, isDragging } = this.props
    const { nodeId, x, y } = this.props.node

    if (isDragging) return null

    return connectDragSource(
      <div className={styles.node} style={{ width: '225px', top: y, left: x }}>
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
      </div>,
    )
  }
}

// connected component below
const mapStateToProps = (state, props) => ({
  node: getNode(state, props),
})

const nodeSource = {
  beginDrag: (props, b, c) => {
    const { nodeId, x, y } = props.node
    return { nodeId, x, y }
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

export default connect(mapStateToProps)(
  withConfigContext(['debug'])(
    DragSource('Node', nodeSource, collect)(Node),
  ),
)
