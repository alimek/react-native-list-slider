// @flow
import React from 'react';
import ReactNative from 'react-native';

import styles from './styles';

type ItemPropTypes = {
  oneColumnSize: number,
  borderWidth: number,
  index: number,
};

const {
  View,
} = ReactNative;

class Item extends React.PureComponent<ItemPropTypes> {
  render() {
    const { oneColumnSize, borderWidth, index } = this.props;

    return (
      <View
        style={[
          styles.subBlock,
          { width: oneColumnSize, borderRightWidth: borderWidth },
          (index + 1) % 10 === 0 ? { borderRightWidth: borderWidth + 2, height: 70 } : null,
        ]}
      />
    );
  }
}

export default Item;
