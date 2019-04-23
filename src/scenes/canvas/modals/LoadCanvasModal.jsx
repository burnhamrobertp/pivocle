import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import canvasesSelector from 'state/canvas/selectors/canvasesSelector'
import LoadCanvasModalRow from './LoadCanvasModalRow'
import styles from './load-canvas-modal.module.scss'

class LoadCanvasModal extends React.PureComponent {
  static propTypes = {
    canvases: T.array.isRequired,
  }

  state = { isOpen: false }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })

  render() {
    const { isOpen } = this.state
    const { canvases } = this.props

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h3>Load Canvas</h3>
        <div className={styles.canvasList}>
          {canvases.map(({ canvasId }) => (
            <LoadCanvasModalRow key={canvasId} canvasId={canvasId} />
          ))}
        </div>
      </Modal>
    )
  }
}

// connected components below
const mapStateToProps = state => ({
  canvases: canvasesSelector(state),
})

export default connect(mapStateToProps, null, null, { forwardRef: true })(LoadCanvasModal)
