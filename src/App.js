import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './App.style.js';
import SelectButton from './Components/SelectButton/';
import ProductCard from './Components/ProductCard/';
import Input from './Components/Input/';

const App = () => {
  // FlatList için geçici data 
  const [productList, setProductList] = useState([
    {
      name: 'Kalem',
      price: 10,
      date: '21.11.2021',
    },
    {
      name: 'Silgi',
      price: 9,
      date: '21.11.2021',
    },
    {
      name: 'Çanta',
      price: 50,
      date: '21.11.2021',
    },
  ]);

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
      <Input label='Ürün Adı' placeholder='Ürün Adını Girin'/>
      <Input label='Ürün Fiyatı' placeholder='Ürün Fiyatı'/>
    </View>
  );
};

export default App;
