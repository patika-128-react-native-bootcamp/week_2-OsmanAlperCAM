import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './SelectButton.style';

const SelectButton = ({title,sendTitle,isSelected}) => {
  // Butonun Seçili Olup Olmadığı Burada Tutuluyor
  // const [isSelected, setIsSelected] = useState(false);
  const onPress = () => {
    sendTitle(title);
  };
  return (
    <TouchableOpacity
      style={isSelected ? styles.selected_container : styles.container}
      onPress={onPress}>
      <Text style={isSelected ? styles.selected_title : styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default SelectButton;
