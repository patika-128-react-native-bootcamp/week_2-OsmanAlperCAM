import React from 'react';
import {View} from 'react-native';
import styles from './App.style.js';
import SelectButton from './Components/SelectButton/';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SelectButton title="Artan Fiyat" />
        <SelectButton title="Azalan Fiyat" />
        <SelectButton title="Tarih" />
      </View>
    </View>
  );
};

export default App;
