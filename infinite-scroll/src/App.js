import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewPort from './ViewPort';
import faker from 'faker';
import sort from 'fast-sort';
import ReactProgressiveList from './ProgressiveLoad';
import ViewPort2 from './ViewPort2';

let DATA = new Array(50000).fill({}).map(_ => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  job: faker.name.jobTitle(),
  uuid: faker.random.uuid()

}))
class App extends Component {
  state = {
    data: DATA,
    options: [
      { label: 'First Name', value: 'firstName' },
      { label: 'Last Name', value: 'lastName' },
      { label: 'Job', value: 'job' }
    ],
    sortedArrays: {
      'firstName': [],
      'lastName': [],
      'job': [],
    }
  }

  handleSelectChange = (event) => {
    console.log('selection change', event.currentTarget.value)
    let fieldStr = event.currentTarget.value;
    this.setState(prev => ({
      data: prev.sortedArrays[fieldStr],
    }))
  }

  componentDidMount() {
    this.prerenderSortedArrays();
    console.log('prerender')
  }

  prerenderSortedArrays() {
    let promises = []
    for (let option of this.state.options) {
      new Promise((resolve, reject) => {
        try {
          let sortedData = this.state.data.slice();
          sort(sortedData).asc(a => a[option.value])
          resolve({ field: option.value, data: sortedData });
        } catch (e) {
          return this.state.data;
        }
      }).then(res => this.setState(prev => {
        prev.sortedArrays[res.field] = res.data;
        console.log('SORTED SETTING', res)
        return { sortedArrays: prev.sortedArrays }
      }))
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          Header
        </header>
        SEARCH BAR

        <select onChange={this.handleSelectChange}>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="job">Job</option>
        </select>

        <ViewPort data={this.state.data} />
      </div>
    );
  }
}

export default App;
