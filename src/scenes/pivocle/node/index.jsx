import React from 'react'
import T from 'prop-types'
import styles from './node.module.scss'

class Node extends React.PureComponent {
  static propTypes = {
    id: T.string.isRequired,
    x: T.number.isRequired,
    y: T.number.isRequired,
  };

  render() {
    const { x, y } = this.props;

    return (
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

export default Node