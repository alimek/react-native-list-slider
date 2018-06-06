// @flow
import React from 'react';
import ReactNative from 'react-native';

import styles from './styles';

type ItemPropTypes = {
  oneColumnSize: number,
  borderWidth: number,
  index: number,
  style?: Object,
  activeStyle?: Object,
};

const {
  View,
} = ReactNative;

class Item extends React.PureComponent<ItemPropTypes> {
  static defaultProps = {
    style: null,
    activeStyle: null,
  };

  render() {
    const { oneColumnSize, borderWidth, index, style, activeStyle } = this.props;

    return (
      <View
        style={[
          styles.subBlock,
          { width: oneColumnSize, borderRightWidth: borderWidth },
          (index + 1) % 10 === 0 ? { borderRightWidth: borderWidth + 2, height: 70 } : null,
          style,
          activeStyle,
        ]}
      />
    );
  }
}

export default Item;
