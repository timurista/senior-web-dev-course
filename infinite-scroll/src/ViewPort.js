import React, { Component } from 'react';

let SHARD_SIZE = 20;
let OVERFLOW_ROWS = 10;
const ELEM_HEIGHT = 20;

class Slice extends Component {
  render() {
    const { slice, index } = this.props;
    return (
      <div key={slice.uuid}>Row {index} - {slice.firstName} {slice.lastName} - {slice.job}</div>
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
  }
  viewPort = React.createRef();

  getSliceOffsets = (slices) => {
    const elemHeight = 20;
    return slices.map((slice, i) => {
      const top = (i * elemHeight) - this.state.offset;
      return { offset: top, index: i }
    })
  }

  // https://github.com/bvaughn/react-window <-- inspired
  renderSlices(slices) {
    const maxHeight = this.getEstHeight();
    const elemHeight = ELEM_HEIGHT;

    // console.log('TOP', this.state.start, this.state.end)
    // console.log('TOP INSIDE', elemHeight, this.state.offset)
    return slices.map((slice, i) => {
      // const top = maxHeight - (i * elemHeight * this.state.end * SCROLL_STEP_Y);
      const top = (i * elemHeight) + this.state.offset;
      // const top = 0;
      if (!slice) return null;
      return (
        <div id={i + this.state.start} key={slice.uuid + '-slice'} style={{ position: 'relative', left: 0, top: top + 'px', height: elemHeight + 'px' }}>
          <Slice
            index={i + this.state.start}
            slice={slice} shouldRender={true}
          />
        </div>
      )
    })
  }

  componentDidMount() {
    window.setInterval(() => {
      requestAnimationFrame(() => {
        let offset = this.viewPort.current.scrollTop;
        this.setState({
          offset
        })
        this.updateSlices();
      })
    }, 150)
  }

  componentWillUnmount() {
    // window.removeEventListener(this.scrollListener)
  }


  getSlices = () => {
    const { start, end } = this.state;
    let startArr = new Array(this.props.data.slice(0, start)).fill(null)
    let endArr = new Array(this.props.data.slice(end)).fill(null)
    return startArr.concat(this.props.data.slice(start, end)).concat(endArr)
  }

  getEstHeight = () => {
    return (this.props.data.length * ELEM_HEIGHT);
  }

  updateSlices() {
    // const offsets = this.getSliceOffsets(this.getSlices());
    let offset = this.state.offset;
    // let box = this.viewPort.current && this.viewPort.current.getBoundingClientRect();
    let maxIndex = Math.floor(offset / ELEM_HEIGHT) - 5;
    let maxStart = maxIndex <= 0 ? 0 : maxIndex;

    let minEnd = maxIndex + SHARD_SIZE * 2;
    // minEnd = minEnd > maxStart + OVERFLOW_ROWS ? 
    console.log('OFFSETS', maxStart, minEnd)
    this.setState({ start: maxStart, end: minEnd })
  }


  componentDidUpdate(state) {
    // console.log('UPDATE HAPPENED', state, this.state.offset);
    // console.log(this.viewPort.current.getBoundingClientRect());
  }
  render() {

    return (
      <div id="win" style={{ height: '800px', overflow: 'auto' }} ref={this.viewPort}>
        <div id="viewport" style={{ height: this.getEstHeight() + 'px', position: 'relative' }}>
          {this.renderSlices(this.getSlices())}
        </div>
      </div>)
  }
}

export default ViewPort