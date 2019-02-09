import React from 'react'
import ConfigContext from './config-context'
import { Theme } from '../types/config'

class ConfigContextProvider extends React.PureComponent {
  state = {
    theme: Theme.Default,
    debug: false,
  }

  setTheme = theme => this.setState({ theme })
  toggleDebug = () => this.setState(pState => ({ debug: !pState.debug }))

  getContextValue = () => ({
    ...this.state,
    setTheme: this.setTheme,
    toggleDebug: this.toggleDebug,
  })

  render() {
    return (
      <ConfigContext.Provider value={this.getContextValue()}>
        {this.props.children}
      </ConfigContext.Provider>
    )
  }
}

export default ConfigContextProvider
