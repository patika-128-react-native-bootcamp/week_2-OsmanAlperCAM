import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({title,onPress}) => {
  return (
    <TouchableOpacity
    style={ styles.container}
    onPress={onPress}>
    <Text style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
  );
};
export default Button;

