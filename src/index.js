import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Pivocle from './Pivocle'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Pivocle />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
