import * as React from 'react';
import {
  FlatList,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View
} from 'react-native';

import styles from './styles';
import Item from './Item';
import {
  Element,
  RNInfinityListSliderPropTypes,
  RNInfinityListSliderState
} from './types';

const itemAmountPerScreen = 20;
const borderWidth = 1;

class ReactNativeInfinityListSlider extends React.Component<
  RNInfinityListSliderPropTypes,
  RNInfinityListSliderState
> {
  flatList: React.RefObject<FlatList<any>> = React.createRef();

  static defaultProps = {
    multiplicity: 0.1,
    decimalPlaces: 1,
    arrayLength: 10000,
    scrollEnabled: true,
    mainContainerStyle: null,
    itemStyle: null,
    tenthItemStyle: null,
    initialPositionValue: 0
  };

  constructor(props: RNInfinityListSliderPropTypes) {
    super(props);
    this.state = {
      items: this.generateArrayBlock(),
      width: 0,
      oneItemWidth: 0,
      value: props.initialPositionValue
    };
  }

  shouldComponentUpdate(
    nextProps: Readonly<RNInfinityListSliderPropTypes>,
    nextState: Readonly<RNInfinityListSliderState>,
    nextContext: any
  ): boolean {
    const { width } = this.state;

    if (width === 0 && nextState.width !== 0) {
      return true;
    }

    if (nextProps.value !== nextState.value) {
      this.setState({
        value: nextProps.value
      });
      this.scrollToElement(nextProps.value);
    }

    return false;
  }

  onLayout = (event: LayoutChangeEvent) => {
    this.setState({
      width: event.nativeEvent.layout.width,
      oneItemWidth: Math.round(
        event.nativeEvent.layout.width / itemAmountPerScreen
      )
    });
    this.init();
  };

  onSliderMoved = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { oneItemWidth } = this.state;
    const {
      onValueChange,
      initialPositionValue,
      maximumValue,
      decimalPlaces
    } = this.props;

    let newValue =
      initialPositionValue +
      Math.floor(event.nativeEvent.contentOffset.x / oneItemWidth) *
        this.props.multiplicity;
    if (maximumValue && newValue > maximumValue) {
      newValue = maximumValue;
    }

    const setValue = parseFloat(
      parseFloat(newValue.toString()).toFixed(decimalPlaces)
    );

    this.setState({
      value: setValue
    });
    onValueChange(setValue);
  };

  generateArrayBlock = (): Array<number> => {
    const { arrayLength, maximumValue, multiplicity } = this.props;

    let length = arrayLength;

    if (maximumValue) {
      length = maximumValue / multiplicity;
      length += itemAmountPerScreen;
    }

    return new Array(length).fill(0);
  };

  init = () => {
    setTimeout(() => this.scrollToElement(this.props.value), 100);
  };

  scrollToElement = (value: number) =>
    this.flatList.current &&
    this.flatList.current.scrollToOffset({
      offset: (value * this.state.oneItemWidth) / this.props.multiplicity,
      animated: false
    });

  renderItem = (element: Element) => (
    <Item
      oneColumnSize={this.state.oneItemWidth}
      borderWidth={borderWidth}
      index={element.index}
      style={this.props.itemStyle}
      tenthItemStyle={this.props.tenthItemStyle}
    />
  );

  renderDefaultThumb = () => (
    <View
      style={[
        styles.defaultThumb,
        this.props.thumbStyle ? this.props.thumbStyle : null
      ]}
    />
  );

  render() {
    const { renderThumb, scrollEnabled, mainContainerStyle } = this.props;
    const { items, width } = this.state;

    return (
      <View
        style={[styles.mainContainer, mainContainerStyle]}
        onLayout={this.onLayout}
      >
        <FlatList
          style={{ flex: 1 }}
          ref={this.flatList}
          getItemLayout={(data, index) => ({
            length: this.state.oneItemWidth,
            offset: this.state.oneItemWidth * index,
            index
          })}
          scrollEnabled={scrollEnabled}
          data={width === 0 ? [] : items}
          keyboardShouldPersistTaps="always"
          horizontal
          onScrollEndDrag={this.onSliderMoved}
          onScroll={this.onSliderMoved}
          onMomentumScrollBegin={this.onSliderMoved}
          onMomentumScrollEnd={this.onSliderMoved}
          keyExtractor={(element, index) => index.toString()}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
        />
        {renderThumb ? renderThumb() : this.renderDefaultThumb()}
      </View>
    );
  }
}

export default ReactNativeInfinityListSlider;
