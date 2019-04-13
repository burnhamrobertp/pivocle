import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'

import { setCanvas, setCurrentCanvas } from './state/canvas/actions'
import { newCanvas } from './state/canvas/reducer'
import ConfigContextProvider from './config/config-context-provider'

import Canvas from './scenes/canvas/Canvas'
import styles from './pivocle.module.scss'
import {getCurrentCanvasId} from './state/canvas/selectors/accessors'

class Pivocle extends React.PureComponent {
  static propTypes = {
    canvasId: T.string,
    // from redux
    setCanvas: T.func.isRequired,
    setCurrentCanvas: T.func.isRequired,
  }

  componentDidMount() {
    const canvas = newCanvas()
    // create a default canvas
    this.props.setCanvas({ canvas })
    this.props.setCurrentCanvas({ canvasId: canvas.canvasId })
  }

  render() {
    const { canvasId } = this.props

    return (
      <ConfigContextProvider>
        <DragDropContextProvider backend={HTML5Backend}>
          <div className={styles.pivocle}>
            {canvasId && <Canvas canvasId={canvasId} />}
          </div>
        </DragDropContextProvider>
      </ConfigContextProvider>
    )
  }
}

// connected component below
const mapStateToProps = state => ({
  canvasId: getCurrentCanvasId(state),
})

const mapDispatchToProps = {
  setCanvas,
  setCurrentCanvas,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pivocle)
