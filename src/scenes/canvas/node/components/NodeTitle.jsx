import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { getNode } from 'state/nodes/selectors/accessors'
import { setNodeTitle } from 'state/nodes/actions'

class NodeTitle extends React.PureComponent {
  static propTypes = {
    nodeId: T.string.isRequired,
    // from redux
    title: T.string.isRequired,
    setNodeTitle: T.func.isRequired,
  }

  handleChange = e => {
    const { nodeId, setNodeTitle } = this.props
    const title = e.target.value

    setNodeTitle({ nodeId, title })
  }

  render() {
    const { title } = this.props

    return (
      <input type="text" placeholder="provide title here..." value={title} onChange={this.handleChange}/>
    )
  }
}

// connected component below
const mapStateToProps = (state, props) => ({
  title: getNode(state, props).title,
})

const mapDispatchToProps = {
  setNodeTitle,
}

const NodeTitleContainer = connect(mapStateToProps, mapDispatchToProps)(NodeTitle)
NodeTitleContainer.propTypes = {
  nodeId: T.string.isRequired,
}

export default NodeTitleContainer