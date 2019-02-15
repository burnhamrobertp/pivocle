import React from 'react'
import T from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons/faGhost'

import { withConfigContext } from 'config/config-context'
import styles from './buttons.module.scss'

class DebugButton extends React.PureComponent {
  static propTypes = {
    debug: T.bool.isRequired,
    toggleDebug: T.func.isRequired,
  }

  render() {
    const { debug, toggleDebug } = this.props
    const classes = classNames(styles.debugButton, { [styles.active]: debug })

    return (
      <button className={classes} onClick={toggleDebug}>
        <FontAwesomeIcon icon={faGhost} />
      </button>
    )
  }
}

export default withConfigContext(['debug', 'toggleDebug'])(DebugButton)
