import createListComponent from './createListCompCopy';

const FixedSizeList = createListComponent({
  getItemOffset: ({ itemSize, size }, index) =>
    index * ((itemSize)),

  getItemSize: ({ itemSize, size }, index) =>
    ((itemSize)),

  getEstimatedTotalSize: ({ itemCount, itemSize }) =>
    ((itemSize)) * itemCount,

  getOffsetForIndexAndAlignment: (
    { direction, height, itemCount, itemSize, layout, width },
    index,
    align,
    scrollOffset
  ) => {
    // TODO Deprecate direction "horizontal"
    const isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    const size = (((isHorizontal ? width : height)));
    const maxOffset = Math.max(
      0,
      Math.min(
        itemCount * ((itemSize)) - size,
        index * ((itemSize))
      )
    );
    const minOffset = Math.max(
      0,
      index * ((itemSize)) - size + ((itemSize))
    );



    switch (align) {
      case 'start':
        return maxOffset;
      case 'end':
        return minOffset;
      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);
      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          console.log('CALC OFFSET', scrollOffset, minOffset, maxOffset)
          return scrollOffset;
        } else if (scrollOffset - minOffset < maxOffset - scrollOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },

  getStartIndexForOffset: (
    { itemCount, itemSize },
    offset
  ) => {
    console.log('getStartIndexForOffset', offset, itemCount, itemSize, Math.floor(offset / ((itemSize))))

    return (Math.max(
      0,
      Math.min(itemCount - 1, Math.floor(offset / ((itemSize))))
    ))
  },

  getStopIndexForStartIndex: (
    { direction, height, itemCount, itemSize, layout, width },
    startIndex,
    scrollOffset
  ) => {
    // TODO Deprecate direction "horizontal"
    const isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    const offset = startIndex * ((itemSize));
    const size = (((isHorizontal ? width : height)));
    return Math.max(
      0,
      Math.min(
        itemCount - 1,
        startIndex +
        Math.floor(
          (size + (scrollOffset - offset)) / ((itemSize))
        )
      )
    );
  },

  initInstanceProps(props) {
    // Noop
  },

  shouldResetStyleCacheOnItemSizeChange: true,
});

export default FixedSizeList;