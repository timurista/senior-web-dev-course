import React, { Component } from 'react'
import InfiniteList from './Infinite-List';
import FakerApi from './FakerApi';
import Spinner from './Spinner'

export default class Handbook extends Component {
  api = new FakerApi();
  fetchMore() {
    return api.next(this.data.length);
  }

  render() {
    return (
      <div className="container">
        <InfiniteList>
          {({ index, style }) => this.renderNode(index, style)}
        </InfiniteList>
        {showSpinner && <Spinner />}
      </div>
    )
  }
}