import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({name,price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name} >{name}</Text>
      <Text style={styles.price}>{price} TL</Text>
    </View>
  );
};
export default ProductCard;

