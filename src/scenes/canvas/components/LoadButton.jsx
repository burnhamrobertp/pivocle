import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen'
import styles from './buttons.module.scss'
import LoadCanvasModal from '../modals/LoadCanvasModal'

class LoadButton extends React.PureComponent {
  static propTypes = {
  }

  constructor(props) {
    super(props)

    this.modalRef = React.createRef()
  }

  openModal = () => {
    this.modalRef.current.openModal()
  }

  render() {
    return (
      <>
        <button className={styles.saveButton} onClick={this.openModal}>
          <FontAwesomeIcon icon={faFolderOpen} size="2x" />
        </button>
        <LoadCanvasModal ref={this.modalRef} />
      </>
    )
  }
}

// connected components below
const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(LoadButton)
