import React, { Component } from 'react'
import CardList from '../components/card-list';
import Scroll from '../components/scroll';
import SearchBox from '../components/search-box';
import ErrorBoundary from '../components/error-boundary';
class App extends Component {
  state = {
    robots: [],
    searchField: ''
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }))
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    if (!robots.length) {
      return <h1 className='tc'>Loading</h1>
    }

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App;