import React from 'react'
import T from 'prop-types'
import { DragSource } from 'react-dnd'
import styles from './node.module.scss'

class Node extends React.PureComponent {
  static propTypes = {
    id: T.string.isRequired,
    x: T.number.isRequired,
    y: T.number.isRequired,
  }

  render() {
    const { x, y, connectDragSource, isDragging } = this.props

    if (isDragging) return null

    return connectDragSource(
      <div className={styles.node} style={{ top: y, left: x }}>
        <header>
          <input type="text" defaultValue="some header" />
        </header>
        <section>
          <textarea defaultValue={`x: ${this.props.x} - y: ${this.props.y}`} />
        </section>
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

export default DragSource('Node', nodeSource, collect)(Node)
