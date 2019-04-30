import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'
import { getNode } from 'state/nodes/selectors/accessors'
import { setNodeDescription } from 'state/nodes/actions'

class NodeDescription extends React.PureComponent {
  static propTypes = {
    nodeId: T.string.isRequired,
    // from redux
    description: T.string.isRequired,
    setNodeDescription: T.func.isRequired
  }

  handleChange = e => {
    const { nodeId, setNodeDescription } = this.props
    const description = e.target.value

    setNodeDescription({ nodeId, description })
  }

  render() {
    const { description } = this.props

    return (
      <TextareaAutosize
        placeholder="provide a description here..."
        value={description}
        onChange={this.handleChange}
      />
    )
  }
}

// connected component below
const mapStateToProps = (state, props) => ({
  description: getNode(state, props).description
})

const mapDispatchToProps = {
  setNodeDescription
}

const NodeDescContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeDescription)
NodeDescContainer.propTypes = {
  nodeId: T.string.isRequired
}

export default NodeDescContainer
