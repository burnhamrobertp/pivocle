import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContextProvider } from 'react-dnd'

import { loadState } from './state/app/actions'
import { getCurrentCanvasId } from './state/canvas/selectors/accessors'
import ConfigContextProvider from './config/config-context-provider'

import Canvas from './scenes/canvas/Canvas'
import styles from './pivocle.module.scss'

class Pivocle extends React.PureComponent {
  static propTypes = {
    canvasId: T.string,
    // from redux
    loadState: T.func.isRequired,
  }

  componentDidMount() {
    // load any saved canvases, also creates a default canvas if no canvases exist in savestate
    this.props.loadState()
  }

  render() {
    const { canvasId } = this.props

    return (
      <ConfigContextProvider>
        <DragDropContextProvider backend={HTML5Backend}>
          <div className={styles.pivocle}>
            {canvasId && <Canvas canvasId={canvasId}/>}
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
  loadState,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pivocle)
