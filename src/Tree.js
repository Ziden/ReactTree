import React, { Component } from 'react';
import TreeItem from './TreeItem.js';
import DragDropMagic from './DragDropMagic.js';

export default class Tree extends Component {
  componentWillMount() {
    this.width = this.props.width;
    this.setState({
      items: this.props.items
    });
  }

  componentDidMount() {
    this.dragDrop = new DragDropMagic(this);
  }

  renderItem(item, key) {
    return (<TreeItem 
      tree={this} 
      width={this.props.width} 
      tabSize={this.props.tabSize} 
      listener={this.props.listener} 
      key={key} 
      item={item}
    />);
  }

  render() {
    const style = {
      width: this.width+'px'
    }
    return (
      <div>
      <div id="reactTree" style={style}>
       { this.state.items.map(this.renderItem.bind(this)) }
      </div>
      </div>
    );
  }
}
