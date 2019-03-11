import React, { Component } from 'react';

let SHARD_SIZE = 20;
let OVERFLOW_ROWS = 10;
const ELEM_HEIGHT = 40;

class Slice extends React.PureComponent {
  render() {
    const { slice, index } = this.props;
    return (
      <div key={slice.uuid} style={{ height: ELEM_HEIGHT + 'px', border: '1px solid black' }}>Row {index} - {slice.firstName} {slice.lastName} - {slice.job}</div>
    )
  }
}

export function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}

export function requestTimeout(callback, delay) {
  let now = new Date();
  const start = now;

  function tick() {
    if (now - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  const timeoutID = {
    id: requestAnimationFrame(tick),
  };

  return timeoutID;
}

class ViewPort extends Component {
  state = {
    slices: this.props.data.slice(0, SHARD_SIZE * 2 + OVERFLOW_ROWS),
    start: 0,
    end: SHARD_SIZE * 2 + OVERFLOW_ROWS,
    offset: 0,
    topOffset: 0,
    scrollRequested: false,
  }
  viewPort = React.createRef();


  // https://github.com/bvaughn/react-window <-- inspired
  renderSlices(slices) {
    const elemHeight = ELEM_HEIGHT;

    return slices.map((slice, i) => {
      const top = ((i * elemHeight) + this.state.offset);
      if (!slice) return null;
      return (
        <div
          id={i + this.state.start}
          key={slice.uuid + '-slice'}
          style={{
            position: 'absolute', left: 0, top: top + 'px', height: elemHeight + 'px', width: '100%'
          }}>
          <Slice
            index={i + this.state.start}
            slice={slice} shouldRender={true}
          />
        </div>
      )
    })
  }

  getSlices = () => {
    const { start, end } = this.state;
    return this.props.data.slice(start, end)
    // return startArr.concat(this.props.data.slice(start, end)).concat(endArr)
  }

  getEstHeight = () => {
    return (this.props.data.length * ELEM_HEIGHT);
  }

  onScroll = event => {
    console.log('scroll', event.currentTarget.scrollTop);
    this.updateSlices(event.currentTarget.scrollTop);
  }

  updateSlices(offset) {
    let maxIndex = Math.floor(offset / ELEM_HEIGHT) - 2;
    let maxStart = maxIndex <= 0 ? 0 : maxIndex;

    let minEnd = maxIndex + SHARD_SIZE * 2;
    // console.log('OFFSETS', maxStart, minEnd, offset)
    this.setState({ start: maxStart, end: minEnd, offset })
  }

  render() {
    return (
      <div onScroll={this.onScroll} id="win" style={{ height: '800px', overflow: 'auto' }} ref={this.viewPort}>
        <div id="viewport" style={{ height: this.getEstHeight() + 'px', position: 'relative' }}>
          {this.renderSlices(this.getSlices())}
        </div>
      </div>)
  }
}

export default ViewPort