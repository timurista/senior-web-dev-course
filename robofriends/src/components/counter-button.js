import React,  { Component } from 'react'

class Header extends Component {
  state = {
    count: 0,
  }

  updateCount = () => {
    this.setState(state => ({ count: state.count + 1}))
  }

  shouldComponentUpdate() {
    return true;
  }
  render() {
    console.log('CounterButton')
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default Header;