import React, { Component } from 'react';
import EventUtils from './EventUtils.js';

export default class TreeItem extends Component {

  static style = () => { return {
      padding: '4px',
      border: '1px solid black',
      borderRadius: '5px',
    };
  }
  
  static itemStyle = () => {
    return {
      transition: 'all 0.5s ease'
    }
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
    const itemStyle = TreeItem.itemStyle();
    style.marginLeft = parseInt(this.props.tabSize) * level;
    return (
        <div 
          id={id} 
          draggable="true"
          onClick={this.onClickTreeItem.bind(this)} 
          className="treeItem" style={itemStyle}>
            <div className="treeItemContent" style={style}>
              {name}
            </div>
        </div>
    );
  }
}
