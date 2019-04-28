// @flow
import React from 'react';
import ReactNative from 'react-native';

import styles from './styles';
import Item from './Item';
import type { Element, Event, RNInfinityListSliderPropTypes, RNInfinityListSliderState } from './types';

const itemAmountPerScreen = 20;
const borderWidth = 1;
const {
  FlatList,
  View,
} = ReactNative;

class ReactNativeInfinityListSlider extends React.PureComponent<
  RNInfinityListSliderPropTypes,
  RNInfinityListSliderState,
  > {
  flatList: ?{
    scrollToOffset: Function,
  } = null;

  static defaultProps = {
    multiplicity: 0.1,
    decimalPlaces: 1,
    arrayLength: 10000,
    shouldMoveSlider: false,
    scrollEnabled: true,
    mainContainerStyle: null,
    itemStyle: null,
    tenthItemStyle: null,
    initialPositionValue: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: this.generateArrayBlock(),
      width: 0,
      oneItemWidth: 0,
    };
  }


  componentDidUpdate() {
    if (this.props.shouldMoveSlider) {
      this.scrollToElement(this.props.value);
    }
  }

  onLayout = (event: Event) => {
    this.setState({
      width: event.nativeEvent.layout.width,
      oneItemWidth: Math.round(event.nativeEvent.layout.width / itemAmountPerScreen),
    });
    this.init();
  };

  onSliderMoved = (event: Event) => {
    const { oneItemWidth } = this.state;
    const { onValueChange, initialPositionValue, maximumValue } = this.props;

    let newValue = initialPositionValue + Math.floor(event.nativeEvent.contentOffset.x / oneItemWidth) * this.props.multiplicity;
    if (newValue > maximumValue) {
      newValue = maximumValue;
    }
    onValueChange(parseFloat(parseFloat(newValue).toFixed(this.props.decimalPlaces)));
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

  scrollToElement = (value: number) => this.flatList && this.flatList.scrollToOffset({
    offset: (value * this.state.oneItemWidth) / this.props.multiplicity,
    animated: false,
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
        this.props.thumbStyle ? this.props.thumbStyle : null,
      ]}
    />
  );

  render() {
    const { renderThumb, scrollEnabled, mainContainerStyle } = this.props;
    const { items, width } = this.state;

    return (
      <View
        style={[
          styles.mainContainer,
          mainContainerStyle,
        ]}
        onLayout={this.onLayout}
      >
        {
          width > 0 ?
            <FlatList
              style={{ flex: 1 }}
              ref={(flatList) => {
                this.flatList = flatList;
              }}
              getItemLayout={(data, index) => (
                {length: this.state.oneItemWidth, offset: this.state.oneItemWidth * index, index}
              )}
              scrollEnabled={scrollEnabled}
              data={items}
              keyboardShouldPersistTaps="always"
              horizontal
              onScrollEndDrag={this.onSliderMoved}
              onScroll={this.onSliderMoved}
              onMomentumScrollBegin={this.onSliderMoved}
              onMomentumScrollEnd={this.onSliderMoved}
              keyExtractor={(element, index) => index.toString()}
              renderItem={this.renderItem}
              showsHorizontalScrollIndicator={false}
            /> : null
        }
        {renderThumb ? renderThumb() : this.renderDefaultThumb()}
      </View>
    );
  }
}

export default ReactNativeInfinityListSlider;
