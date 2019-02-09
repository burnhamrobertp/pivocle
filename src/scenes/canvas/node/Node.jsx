import React from 'react'
import T from 'prop-types'
import { DragSource } from 'react-dnd'
import { withConfigContext } from 'config/config-context'
import styles from './node.module.scss'

class Node extends React.PureComponent {
  static propTypes = {
    id: T.string.isRequired,
    x: T.number.isRequired,
    y: T.number.isRequired,
    // from config context
    debug: T.bool.isRequired,
    // from dnd context
    connectDragSource: T.func.isRequired,
    isDragging: T.bool.isRequired,
  }

  render() {
    const { x, y, debug, connectDragSource, isDragging} = this.props

    if (isDragging) return null

    return connectDragSource(
      <div className={styles.node} style={{ width: '225px', top: y, left: x }}>
        <header>
          <input type="text" placeholder="provide title here..." />
        </header>
        <section>
          <textarea placeholder="provide a description here..." />
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

const nodeSource = {
  beginDrag: props => {
    const { id, x, y } = props
    return { id, x, y }
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

export default withConfigContext(['debug'])(
  DragSource('Node', nodeSource, collect)(Node)
)
