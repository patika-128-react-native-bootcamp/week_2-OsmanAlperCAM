import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({label, placeholder, sendText, textValue,keyboardType}) => {
  const onChangeText = text => {
    sendText(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={textValue}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};
export default Input;
