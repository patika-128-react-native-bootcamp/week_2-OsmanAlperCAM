import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './AddCard.style';
import Input from '../Input/';
import Button from '../Button';

const AddCard = ({sendProduct}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const [product, setProduct] = useState({});

  const onButtonPress = () => {
    if (name === '' || price === '') {
      return;
    }
    const date = new Date();
    setProduct({name, price, date});

  };

  useEffect(() => {
    sendProduct(product);
    setName('');
    setPrice('');
  }, [product]);

  return (
    <View style={styles.container}>
      <Input
        label="Name"
        placeholder="Product Name..."
        sendText={text => setName(text)}
        textValue={name}
        keyboardType="default"
      />
      <Input
        label="Price"
        placeholder="Product Price..."
        sendText={text => setPrice(text)}
        textValue={price.toString()}
        keyboardType="decimal-pad"

      />
      <Button title="ADD" onPress={onButtonPress} />
    </View>
  );
};
export default AddCard;
