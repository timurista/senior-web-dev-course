import React, { Component } from 'react'
import List from './window';
// import './index.css';

export default class ViewPort2 extends Component {
  renderRow = ({ index, style }) => {
    let item = this.props.data[index];
    return (
      <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        Row {index} {item.firstName} {item.lastName} {item.job}
      </div>
    );
  }
  render() {
    return (
      <List
        className="List"
        height={500}
        itemCount={this.props.data.length}
        itemSize={35}
      >
        {this.renderRow}
      </List>
    )
  }
}