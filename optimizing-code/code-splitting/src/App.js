import React, { Component } from 'react';
import './App.css';

import Page1 from './components/page1';
import AsyncComponent from './components/async-component';

class App extends Component {
  state = {
    route: 'page1',
    component: null,
  }
  onRouteChange = (route) => {
    this.setState({ route })
    
    // with code splitting example 1
    // if (route === 'page1') {
    //   this.setState({ route })
    // } else if (route === 'page2') {
    //   import('./components/page2').then(Page2 => {
    //     this.setState({ route, component: Page2.default })
    //   })
    // } else if (route === 'page3') {
    //   import('./components/page3').then(Page3 => {
    //     this.setState({ route, component: Page3.default })
    //   })
    // }
  }
  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange}/>;
    } else if (this.state.route === 'page2') {
      const AsnycPage2 = AsyncComponent(() => import('./components/page2.js'))
      return <AsnycPage2 onRouteChange={this.onRouteChange}/>;
    } else if (this.state.route === 'page3') {
      const AsnycPage3 = AsyncComponent(() => import('./components/page3.js'))
      return <AsnycPage3 onRouteChange={this.onRouteChange}/>;
    }
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange}/>;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
