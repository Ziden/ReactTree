import React, { Component } from 'react';
import EventUtils from './EventUtils.js';

export default class TreeItem extends Component {

  static style = () => { return {
      padding: '4px',
      border: '1px solid black',
      width: '150px',
      borderRadius: '5px'
    };
  }

  componentWillMount() {
    this.setState({
      item: this.props.item
    });
  }

  onClickTreeItem(event) {
    this.props.listener.onClickTreeItem(this);
  }

  render() {
    const { name, level, id } = this.state.item;
    const style = TreeItem.style();
    style.marginLeft = 15 * level;
    return (
        <div 
          id={id} 
          draggable="true"
          onClick={this.onClickTreeItem.bind(this)} 
          className="treeItem">
            <div className="treeItemContent" style={style}>
              {name}
            </div>
        </div>
    );
  }
}
