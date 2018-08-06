import React, { Component } from 'react';

export default function asnycComponent(importComponent) {
  class AsnycComponent extends Component {
    state ={
      component: null,
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component })
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }
  return AsnycComponent;
}