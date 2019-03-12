import React, { Component } from 'react';

let SHARD_SIZE = 20;
let OVERFLOW_ROWS = 10;
const ELEM_HEIGHT = 200;

class ScrollHandler {
  constructor(timeout = 150) {
    this.locked = false;
    this.event = null
    this.timeout = timeout;
  }
  add(event, cb) {
    let now = new Date();
    if (!this.locked) {
      this.event = { cb, now };
      this.locked = true;
    }
    console.log('EVENT', event, now)
    if (now.getTime() >= this.event.now.getTime() + this.timeout) {
      cb.call(event);
      this.event = null;
      this.locked = false;
    }
  }
}

class Slice extends React.PureComponent {
  render() {
    const { slice, index } = this.props;
    return (
      <div key={slice.uuid} style={{ height: ELEM_HEIGHT + 'px', border: '1px solid black' }}>Row {index} - {slice.firstName} {slice.lastName} - {slice.job}</div>
    )
  }
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
  scrollHandler = new ScrollHandler(20);


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
  }

  getEstHeight = () => {
    return (this.props.data.length * ELEM_HEIGHT);
  }

  onScroll = event => {
    console.log('scroll');
    let currentTarget = event.currentTarget
    this.updateSlices(currentTarget.scrollTop)
    // this.scrollHandler.add(event, () => this.updateSlices(currentTarget.scrollTop));
  }

  updateSlices(offset) {
    let maxIndex = Math.floor(offset / ELEM_HEIGHT) - 2;
    let maxStart = maxIndex <= 0 ? 0 : maxIndex;

    let minEnd = maxIndex + SHARD_SIZE * 1.2;
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