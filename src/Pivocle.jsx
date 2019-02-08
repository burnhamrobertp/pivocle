import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'
import Canvas from './scenes/canvas/Canvas'
import styles from './pivocle.module.scss'

class Pivocle extends React.PureComponent {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={styles.pivocle}>
          <Canvas />
        </div>
      </DragDropContextProvider>
    )
  }
}

export default Pivocle
