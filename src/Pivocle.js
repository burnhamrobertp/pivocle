import React, { Component } from 'react'
import Canvas from './scenes/canvas/Canvas'
import styles from './pivocle.module.scss'

class Pivocle extends Component {
  render() {
    return (
      <div className={styles.pivocle}>
        <Canvas />
      </div>
    );
  }
}

export default Pivocle;
