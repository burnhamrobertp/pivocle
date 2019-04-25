import React from 'react'
import T from 'prop-types'
import panzoom from 'panzoom'

class DropableCanvas extends React.PureComponent {
  static propTypes = {
    className: T.node,
    children: T.any.isRequired
  }

  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  componentDidMount() {
    this.panzoom = panzoom(this.ref.current, { smoothScroll: false })
  }

  componentWillUnmount() {
    this.panzoom.dispose()
  }

  // Prevents browser from showing a "not allowed" cursor
  handleDragOver = e => {
    e.preventDefault()
  }

  render() {
    const { className, children } = this.props

    return (
      <div
        ref={this.ref}
        className={className}
        onDragOver={this.handleDragOver}
      >
        {children}
      </div>
    )
  }
}

export default DropableCanvas
