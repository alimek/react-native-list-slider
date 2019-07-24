export interface RNInfinityListSliderPropTypes {
  value: number;
  onValueChange: Function;
  renderThumb?: Function;
  thumbStyle?: Object;
  multiplicity: number;
  decimalPlaces?: number;
  arrayLength: number;
  shouldMoveSlider?: boolean;
  scrollEnabled: boolean;
  mainContainerStyle?: Object;
  itemStyle?: Object;
  tenthItemStyle?: Object;
  initialPositionValue: number;
  maximumValue?: number;
}

export interface RNInfinityListSliderState {
  width: number;
  items: Array<number>;
  oneItemWidth: number;
  value: number;
}

export interface Element {
  index: number;
}
