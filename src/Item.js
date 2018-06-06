// @flow
import React from 'react';
import ReactNative from 'react-native';

import styles from './styles';

type ItemPropTypes = {
  oneColumnSize: number,
  borderWidth: number,
  index: number,
  style?: Object,
  tenthItemStyle?: Object,
};

const {
  View,
} = ReactNative;

class Item extends React.PureComponent<ItemPropTypes> {
  static defaultProps = {
    style: null,
    tenthItemStyle: null,
  };

  render() {
    const { oneColumnSize, borderWidth, index, style, tenthItemStyle } = this.props;

    return (
      <View
        style={[
          styles.subBlock,
          { width: oneColumnSize, borderRightWidth: borderWidth },
          (index + 1) % 10 === 0 ? { borderRightWidth: borderWidth + 2, height: 70 } : null,
          style,
          (index + 1) % 10 === 0 ? tenthItemStyle : null,
        ]}
      />
    );
  }
}

export default Item;
