import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'
import ConfigContextProvider from './config/config-context-provider'
import Canvas from './scenes/canvas/Canvas'
import styles from './pivocle.module.scss'

class Pivocle extends React.PureComponent {
  render() {
    return (
      <ConfigContextProvider>
        <DragDropContextProvider backend={HTML5Backend}>
          <div className={styles.pivocle}>
            <Canvas />
          </div>
        </DragDropContextProvider>
      </ConfigContextProvider>
    )
  }
}

export default Pivocle
