export type RNInfinityListSliderPropTypes = {
  value: number,
  onValueChange: Function,
  renderThumb?: Function,
  thumbStyle?: Object,
  multiplicity?: number,
  decimalPlaces?: number,
  arrayLength?: number,
};

export type RNInfinityListSliderState = {
  value: number,
  previewValue: number,
  currentXStep: number,
  isMoving: boolean,
  width: number,
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