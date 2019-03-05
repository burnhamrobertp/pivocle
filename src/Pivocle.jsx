import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'

import currentCanvasIdSelector from './state/canvas/selectors/current-canvas-id.selector'
import { setCanvas } from './state/canvas/actions'
import { newCanvas } from './state/canvas/reducer'
import ConfigContextProvider from './config/config-context-provider'

import Canvas from './scenes/canvas/Canvas'
import styles from './pivocle.module.scss'

class Pivocle extends React.PureComponent {
  static propTypes = {
    canvasId: T.string,
    setCanvas: T.func.isRequired,
  }

  componentDidMount() {
    // create a default canvas
    this.props.setCanvas({ canvas: newCanvas() })
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
  canvasId: currentCanvasIdSelector(state),
})
const mapDispatchToProps = {
  setCanvas,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pivocle)
