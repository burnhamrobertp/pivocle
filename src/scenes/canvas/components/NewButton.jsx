import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'

import { setCanvas, setCurrentCanvas } from 'state/canvas/actions'
import { newCanvas } from 'state/canvas/reducer'
import styles from './buttons.module.scss'

class NewButton extends React.PureComponent {
  static propTypes = {
    // from redux
    setCanvas: T.func.isRequired,
    setCurrentCanvas: T.func.isRequired,
  }

  createCanvas = () => {
    const canvas = newCanvas()
    const { canvasId } = canvas

    this.props.setCanvas({ canvas })
    this.props.setCurrentCanvas({ canvasId })
  }

  render() {
    return (
      <button className={styles.newButton} onClick={this.createCanvas}>
        <FontAwesomeIcon icon={faFile} size="2x" />
      </button>
    )
  }
}

// connected components below
const mapDispatchToProps = {
  setCanvas,
  setCurrentCanvas,
}

export default connect(null, mapDispatchToProps)(NewButton)
