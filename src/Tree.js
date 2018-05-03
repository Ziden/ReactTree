import React, { Component } from 'react';

export default class Tree extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      items: this.props.items
    });
  }

  renderItem(item, key) {
     const { name, level, id } = item;
     const style = {
       marginLeft: level * 10 + 'px'
     }
     return (<div id={id} class="item" key={key} style={style}>{name}</div>);
  }

  render() {
    const renderedItems = this.state.items.map(this.renderItem);
    return (
      <div id="reactTree">
       { renderedItems }
      </div>
    );
  }
}
