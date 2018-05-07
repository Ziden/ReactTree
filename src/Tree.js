import React, { Component } from 'react';
import TreeItem from './TreeItem.js';
import DragDropMagic from './DragDropMagic.js';

export default class Tree extends Component {

  componentWillMount() {
    this.treeItems = this.props.items.map(this.renderItem.bind(this));
    this.setState({
      items: this.props.items
    });
  }

  componentDidMount() {
    this.dragDrop = new DragDropMagic(this);
  }

  renderItem(item, key) {
    return (<TreeItem tree={this} listener={this.props.listener} key={key} item={item}/>);
  }

  render() {
    return (
      <div id="reactTree">
       { this.treeItems }
      </div>
    );
  }
}
