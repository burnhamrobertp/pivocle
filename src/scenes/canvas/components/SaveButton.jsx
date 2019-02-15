import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'
import { saveCanvas } from 'state/canvas/actions'
import styles from './buttons.module.scss'

class SaveButton extends React.PureComponent {
  static propTypes = {
    // from redux
    saveCanvas: T.func.isRequired
  }

  render() {
    const { saveCanvas } = this.props

    return (
      <button className={styles.saveButton} onClick={saveCanvas}>
        <FontAwesomeIcon icon={faSave} size="2x" />
      </button>
    )
  }
}

// connected components below
const mapDispatchToProps = {
  saveCanvas,
}

export default connect(null, mapDispatchToProps)(SaveButton)
