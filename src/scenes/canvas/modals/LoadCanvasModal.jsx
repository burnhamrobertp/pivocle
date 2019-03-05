import React from 'react'
import Modal from 'react-modal'
import styles from './load-canvas-modal.module.scss'

class LoadCanvasModal extends React.PureComponent {
  state = { isOpen: false }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })

  render() {
    const { isOpen } = this.state

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <header>Load Pivocle</header>
        <body>
          <ul>
            {}
          </ul>
        </body>
      </Modal>
    )
  }
}

// connected components below

export default LoadCanvasModal
