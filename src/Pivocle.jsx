import React from 'react'
import Canvas from './scenes/canvas/Canvas'
import styles from './pivocle.module.scss'

class Pivocle extends React.PureComponent {
  render() {
    return (
      <div className={styles.pivocle}>
        <Canvas />
      </div>
    )
  }
}

export default Pivocle
