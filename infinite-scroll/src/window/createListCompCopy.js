// @flow
import memoizeOne from 'memoize-one';
import React, { createElement, PureComponent } from 'react';
import { cancelTimeout, requestTimeout } from './timer';

const IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

const defaultItemKey = (index, data) => index;

// In DEV mode, this Set helps us only log a warning once per component instace.
// This avoids spamming the console every time a render happens.
let devWarningsDirection = null;
let devWarningsTagName = null;
if (process.env.NODE_ENV !== 'production') {
  if (typeof window.WeakSet !== 'undefined') {
    devWarningsDirection = new WeakSet();
    devWarningsTagName = new WeakSet();
  }
}

export default function createListComponent({
  getItemOffset,
  getEstimatedTotalSize,
  getItemSize,
  getOffsetForIndexAndAlignment,
  getStartIndexForOffset,
  getStopIndexForStartIndex,
  initInstanceProps,
  shouldResetStyleCacheOnItemSizeChange,
}) {
  return class List<T> extends PureComponent {
    _instanceProps = initInstanceProps(this.props, this);
    _outerRef;
    _resetIsScrollingTimeoutId = null;

    static defaultProps = {
      direction: 'ltr',
      itemData: undefined,
      layout: 'vertical',
      overscanCount: 2,
      useIsScrolling: false,
    };

    state = {
      instance: this,
      isScrolling: false,
      scrollDirection: 'forward',
      scrollOffset:
        typeof this.props.initialScrollOffset === 'number'
          ? this.props.initialScrollOffset
          : 0,
      scrollUpdateWasRequested: false,
    };

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }

    _getRangeToRender() {
      const { itemCount, overscanCount } = this.props;
      const { isScrolling, scrollDirection, scrollOffset } = this.state;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      console.log(itemCount, overscanCount, scrollDirection)
    }

    render() {
      const {
        children,
        className,
        direction,
        height,
        innerRef,
        innerElementType,
        innerTagName,
        itemCount,
        itemData,
        itemKey = defaultItemKey,
        layout,
        outerElementType,
        outerTagName,
        style,
        useIsScrolling,
        width,
      } = this.props;
      const { isScrolling } = this.state;

      // TODO Deprecate direction "horizontal"
      const isHorizontal =
        direction === 'horizontal' || layout === 'horizontal';

      const onScroll = isHorizontal
        ? this._onScrollHorizontal
        : this._onScrollVertical;

      const [startIndex, stopIndex] = this._getRangeToRender();

      const items = [];
      if (itemCount > 0) {
        for (let index = startIndex; index <= stopIndex; index++) {
          items.push(
            createElement(children, {
              data: itemData,
              key: itemKey(index, itemData),
              index,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              style: this._getItemStyle(index),
            })
          );
        }
      }

      // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.
      const estimatedTotalSize = getEstimatedTotalSize(
        this.props,
        this._instanceProps
      );

      return (
        <div ref={this._outerRefSetter} onScroll={onScroll} style={{ position: 'relative', height, width, overflow: 'auto', direction, ...style }}>
          <div ref={innerRef} style={{ height: estimatedTotalSize }}>
            {items}
          </div>
        </div>
      )

      return createElement(
        outerElementType || outerTagName || 'div',
        {
          className,
          onScroll,
          ref: this._outerRefSetter,
          style: {
            position: 'relative',
            height,
            width,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform',
            direction,
            ...style,
          },
        },
        createElement(innerElementType || innerTagName || 'div', {
          children: items,
          ref: innerRef,
          style: {
            height: isHorizontal ? '100%' : estimatedTotalSize,
            pointerEvents: isScrolling ? 'none' : '',
            width: isHorizontal ? estimatedTotalSize : '100%',
          },
        })
      );
    }
  }
}
// NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.
