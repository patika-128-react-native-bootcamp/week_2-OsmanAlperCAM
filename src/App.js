import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './App.style.js';
import SelectButton from './Components/SelectButton/';
import ProductCard from './Components/ProductCard/';
import AddCard from './Components/AddCard/';

const App = () => {

  const [productList, setProductList] = useState([]);

  // AddCard tan Gelen Veriyi al
  const getProductFromCard = product => {
    if(product.name === undefined || product.price === undefined){
      return;
    }
    setProductList([...productList, product]);
  };

  // FlatList Componenti Render Metodu
  const renderProduct = ({item}) => {
    return <ProductCard name={item.name} price={item.price} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SelectButton title="Artan Fiyat" />
        <SelectButton title="Azalan Fiyat" />
        <SelectButton title="Tarih" />
      </View>
      <FlatList data={productList} renderItem={renderProduct} />
      <AddCard sendProduct={getProductFromCard} />
    </View>
  );
};

export default App;
