import React, { Component } from 'react'
import { connect } from 'react-redux';
import CardList from '../components/card-list';
import Scroll from '../components/scroll';
import SearchBox from '../components/search-box';
import ErrorBoundary from '../components/error-boundary';

import { setSearchField, requestRobots } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    if (error) {
      return <h2>ERROR: {error}</h2>
    }

    if (isPending) {
      return <h1 className='tc'>Loading</h1>
    }

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { searchField } = state.searchRobots;
  const { isPending, error, robots } = state.requestRobots;
  return {
    searchField,
    robots,
    isPending,
    error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);