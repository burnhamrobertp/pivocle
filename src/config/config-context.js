import React from 'react'

const ConfigContext = React.createContext({
  theme: undefined,
  debug: undefined,

  setTheme: undefined,
  toggleDebug: undefined,
})

export default ConfigContext

export const withConfigContext = contextSlices => Component => props => (
  <ConfigContext.Consumer>
    {injectedProps => (
      <Component
        {...props}
        {...contextSlices.reduce((acc, s) => {
          acc[s] = injectedProps[s]
          return acc
        }, {})}
      />
    )}
  </ConfigContext.Consumer>
)
withConfigContext.displayName = 'withConfigContext'
