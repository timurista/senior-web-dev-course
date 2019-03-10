import React, { Component } from 'react';

let SHARD_SIZE = 100;
let SCROLL_STEP_Y = 1;
let OVERFLOW_ROWS = 10;

class Slice extends Component {
  render() {
    const { slice } = this.props;
    return (
      <div key={slice.uuid}>{slice.firstName} {slice.lastName} - {slice.job}</div>
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
    const elemHeight = 20;

    console.log('TOP', this.state.start, this.state.end)
    console.log('TOP INSIDE', elemHeight, this.state.offset)
    return slices.map((slice, i) => {
      // const top = maxHeight - (i * elemHeight * this.state.end * SCROLL_STEP_Y);
      const top = (i * elemHeight) - this.state.offset;
      if (!slice) return null;
      return (
        <div key={slice.uuid + '-slice'} style={{ position: 'relative', left: 0, top: top + 'px', height: elemHeight + 'px' }}>
          <Slice
            index={i}
            slice={slice} shouldRender={true}
          />
        </div>
      )
    })
  }

  componentDidMount() {
    console.log('DID MOUNT')
    this.scrollListener = window.addEventListener('scroll', (event) => {
      console.log('SCROLL')

      this.handleScroll(event)
    })
  }

  componentWillUnmount() {
    window.removeEventListener(this.scrollListener)
  }

  handleScroll(event) {
    console.log('scroll event', window.pageYOffset)
    // event.stopPropogation();
    let last_known_scroll_position = window.scrollY;
    this.calcSlices(last_known_scroll_position);
    // if (!this.state.ticking) {
    //   window.requestAnimationFrame(() => {
    //     this.calcSlices(last_known_scroll_position);
    //     this.setState({ ticking: false });
    //   });

    //   this.setState({ ticking: true });
    // }
  }

  calcSlices(last_known_scroll_position = 0) {
    if (!last_known_scroll_position) return;
    let direction = Math.sign(last_known_scroll_position - this.state.topOffset);
    let mag = Math.abs(last_known_scroll_position - this.state.topOffset);
    console.log('magnitude', mag, direction)

    this.setState(prev => ({
      topOffset: window.scrollY,
      offset: (prev.offset || 0) + (mag * direction),
      magnitude: mag
    }))

    this.updateSlices();
  }

  getSlices = () => {
    const { start, end } = this.state;
    return this.props.data.slice(start, end)
  }

  getEstHeight = () => {
    return (this.props.data.length * 200);
  }

  updateSlices() {
    const offsets = this.getSliceOffsets(this.getSlices());
    let box = this.viewPort.current && this.viewPort.current.getBoundingClientRect();
    console.log('OFFSETS', box.bottom, offsets)
    let maxStart = this.state.start;
    let minEnd = this.state.start;
    for (let offset of offsets) {
      if (box && offset.offset < 0) {
        console.log('offsets', offset.offset)
        maxStart = Math.max(maxStart, offset.index + this.state.start)
      }
      if (box && offset.offset > 1000) {
        minEnd = Math.min(minEnd, offset.index + this.state.end)
      }
    }
    this.setState({ start: maxStart, end: maxStart + 10 })
  }

  render() {

    return (
      <div id="win" style={{ height: '500px', overflow: 'auto' }} ref={this.viewPort}>
        <div id="viewport" style={{ height: this.getEstHeight() + 'px', position: 'relative' }}>
          {this.renderSlices(this.getSlices())}
        </div>
      </div>)
  }
}

export default ViewPort