import React from 'react'
import { connect } from 'react-redux'
import T from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'
import { saveState } from 'state/app/actions'
import styles from './buttons.module.scss'

class SaveButton extends React.PureComponent {
  static propTypes = {
    // from redux
    saveState: T.func.isRequired
  }

  render() {
    const { saveState } = this.props

    return (
      <button className={styles.saveButton} onClick={saveState}>
        <FontAwesomeIcon icon={faSave} size="2x" />
      </button>
    )
  }
}

// connected components below
const mapDispatchToProps = {
  saveState,
}

export default connect(null, mapDispatchToProps)(SaveButton)
