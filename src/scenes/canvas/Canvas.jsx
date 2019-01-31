import React from 'react'
import v4 from 'uuid'
import Node from './node/Node'
import styles from './canvas.module.scss'

class Canvas extends React.PureComponent {
  static propTypes = {};

  state = { nodes: [] };

  addNode = () => this.setState(state => ({
    nodes: [
      ...state.nodes,
      { id: v4(), x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    ]
  }));

  renderNodes = () => this.state.nodes.map(node => <Node key={node.id} {...node} />);

  render() {
    return <div className={styles.canvas}>
      <button onClick={this.addNode}>New Node</button>
      {this.renderNodes()}
    </div>
  }
}

export default Canvas