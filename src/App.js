import React, { Component } from 'react';
import Tree from './Tree.js';
import MockInput from './mocks/mockinput.js';
import TreeListener from './TreeListener.js';

export default class App extends Component {
  render() {
    return (
      <Tree 
      width="350"
      tabSize="20"
      items={MockInput}
      listener={TreeListener}
      />
    );
  }
}
