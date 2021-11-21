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
    if (product.name === undefined || product.price === undefined) {
      return;
    }
    setProductList([...productList, product]);
  };

  // SelectButonun Başlığına Göre Sıralama İşlemi
  const getTitleFromSelectedButton = title => {
    if (title === 'Artan Fiyat') {
      setProductList([...productList].sort((a, b) => a.price - b.price));
    }
    if (title === 'Azalan Fiyat') {
      setProductList(
        [...productList].sort((a, b) => a.price - b.price).reverse(),
      );
    }
    if (title === 'Tarih') {
      setProductList(
        [...productList].sort((a, b) => b.date - a.date).reverse(),
      );
    }
  };

  // FlatList Componenti Render Metodu
  const renderProduct = ({item}) => {
    return <ProductCard name={item.name} price={item.price} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SelectButton
          title="Artan Fiyat"
          sendTitle={getTitleFromSelectedButton}
        />
        <SelectButton
          title="Azalan Fiyat"
          sendTitle={getTitleFromSelectedButton}
        />
        <SelectButton title="Tarih" sendTitle={getTitleFromSelectedButton} />
      </View>
      <FlatList data={productList} renderItem={renderProduct} />
      <AddCard sendProduct={getProductFromCard} />
    </View>
  );
};

export default App;
