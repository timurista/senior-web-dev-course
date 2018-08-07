import React,  { Component } from 'react'
import CounterButton from './counter-button';

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log('Header')
    return (
      <div>
        <CounterButton color='red' />
        <h1 className='f1'>RoboFriends</h1>
      </div>
    )
  }
}

export default Header;