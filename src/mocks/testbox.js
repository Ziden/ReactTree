import React, { Component } from 'react';

export default class TestBox extends Component {

    constructor(props) {
        super(props);
        this.setState({
            items: props.items
        });
    }

  render() {
    return (
      <input type="textarea">{JSON.stringify(this.state.items)}</input>
    );
  }
}
