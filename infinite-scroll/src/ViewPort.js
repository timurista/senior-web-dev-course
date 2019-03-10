import React, { Component } from 'react';

let SHARD_SIZE = 100;

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
    slices: this.props.data.slice(0, SHARD_SIZE),
    slicesBottom: [],
    slicesTop: [],
    start: 0,
    end: 1,
  }
  viewPort = React.createRef();

  renderSlices(slices) {
    console.log('SLICES', slices)
    return slices.map((slice, index) => {
      if (!slice) return null;
      return <Slice key={slice.uuid + '-slice'} slice={slice} shouldRender={true} />
    }
    )
  }

  componentDidMount() {
    this.scrollListener = window.addEventListener('scroll', (event) => {
      this.handleScroll(event)
    })
    this.setState(prev => {
      for (let i = prev.start * SHARD_SIZE; i < prev.end * SHARD_SIZE; i++) {
        prev.slices[i] = this.props.data[i];
      }
      return ({
        slices: prev.slices,
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener(this.scrollListener)
  }

  handleScroll(event) {
    // console.log('scroll event', window.pageYOffset)
    // event.stopPropogation();
    let last_known_scroll_position = window.scrollY;

    if (!this.state.ticking) {
      window.requestAnimationFrame(() => {
        this.calcSlices(last_known_scroll_position);
        this.setState({ ticking: false });
      });

      this.setState({ ticking: true });
    }
  }

  calcSlices(last_known_scroll_position) {
    if (!last_known_scroll_position) return;
    let box = this.viewPort.current.getBoundingClientRect()
    let middleSectionStart = box.bottom * (1 / 3);
    let middleSectionEnd = box.bottom * (2 / 3);
    // console.log('viewport', middleSectionStart, middleSectionEnd)

    let shouldRenderTop = last_known_scroll_position <= middleSectionStart;
    let shouldRenderBottom = last_known_scroll_position >= middleSectionEnd;

    let start = this.state.start;
    let end = this.state.end;
    // if (shouldRenderTop) {
    //   if (start > 0) start--;
    //   end--;
    //   if (start === 0) end = 1;
    // }
    if (shouldRenderBottom) {
      const indexEnd = Math.floor(this.props.data.length / SHARD_SIZE);
      if (end < indexEnd) end++;
    }

    if (end > 5) {
      start = end - 5;
    } if (end < 5) {
      start = 0;
    }

    this.updateRenderSlices(start, end);
  }

  updateRenderSlices(start, end) {

    this.setState(prev => {
      for (let i = start * SHARD_SIZE; i < end * SHARD_SIZE; i++) {
        prev.slices[i] = this.props.data[i];
      }
      return ({
        slices: prev.slices,
        start: start,
        end: end,
      })
    })
    // console.log(start, end, this.props.data)
    // this.setState({
    //   slicesBottom: this.props.data.slice((start - 1) * SHARD_SIZE, start * SHARD_SIZE),
    //   slices: this.props.data.slice(start * SHARD_SIZE, end * SHARD_SIZE),
    //   slicesTop: this.props.data.slice((end - 1) * SHARD_SIZE, end * SHARD_SIZE),
    //   start,
    //   end,
    // })
  }

  render() {
    const { slicesTop, slices, slicesBottom, start, end } = this.state;
    const getSlices = (start, end) => {
      return this.props.data.slice(start * SHARD_SIZE, end * SHARD_SIZE)
    }
    return (<div>
      <div id="viewport" ref={this.viewPort}>{this.renderSlices(getSlices(start, end))}</div>
    </div>)
  }
}

export default ViewPort