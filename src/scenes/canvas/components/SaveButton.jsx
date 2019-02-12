import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'
import styles from './save-button.module.scss'

class SaveButton extends React.PureComponent {
  static propTypes = {}

  render() {
    return (
      <button className={styles.saveButton}>
        <FontAwesomeIcon icon={faSave} size="2x" />
      </button>
    )
  }
}

export default SaveButton
