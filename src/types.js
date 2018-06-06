// @flow
export type RNInfinityListSliderPropTypes = {
  value: number,
  onValueChange: Function,
  renderThumb?: Function,
  thumbStyle?: Object,
  multiplicity: number,
  decimalPlaces?: number,
  arrayLength: number,
  shouldMoveSlider?: boolean,
};

export type RNInfinityListSliderState = {
  width: number,
  items: Array<number>,
  oneItemWidth: number,
};

export type Event = {
  nativeEvent: {
    contentOffset: {
      x: number,
    },
    layout: {
      width: number,
    },
  },
};

export type Element = {
  index: number,
};
