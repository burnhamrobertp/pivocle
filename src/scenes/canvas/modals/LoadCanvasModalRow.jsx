import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

import { setCurrentCanvas, deleteCanvas } from 'state/canvas/actions'
import { getCanvas } from 'state/canvas/selectors/accessors'
import styles from './load-canvas-modal.module.scss'

class LoadCanvasModalRow extends React.PureComponent {
  static propTypes = {
    canvas: T.shape({
      canvasId: T.string.isRequired,
      name: T.string.isRequired,
    }).isRequired,
  }

  selectCanvas = () => {
    const { canvasId } = this.props.canvas

    this.props.setCurrentCanvas({ canvasId })
  }

  deleteCanvas = () => {
    const { canvasId } = this.props.canvas

    window.confirm(`Delete canvas ${canvasId}?`, () => {
      this.props.deleteCanvas({ canvasId })
    })
  }

  render() {
    const { name } = this.props.canvas

    return (
      <div className={styles.canvasRow} onClick={this.selectCanvas}>
        <div>{name}</div>
        <div>
          <FontAwesomeIcon icon={faTrash} onClick={this.deleteCanvas} />
        </div>
      </div>
    )
  }
}

// connected component
const mapStateToProps = (state, props) => ({
  canvas: getCanvas(state, props),
})

const mapDispatchToProps = {
  setCurrentCanvas,
  deleteCanvas,
}

const LoadCanvasModalRowContainer = connect(mapStateToProps, mapDispatchToProps)(LoadCanvasModalRow)
LoadCanvasModalRowContainer.propTypes = {
  canvasId: T.string.isRequired,
}

export default LoadCanvasModalRowContainer
