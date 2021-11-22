import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './App.style.js';
import SelectButton from './Components/SelectButton/';
import ProductCard from './Components/ProductCard/';
import AddCard from './Components/AddCard/';
import Divider from './Components/Divider/';

const App = () => {
  const [productList, setProductList] = useState([]);

  // Butonun Seçili Olup Olmadığı selectedButtonTitle Değerine Göre Belirleniyor
  const [selectedButtonTitle, setSelectedButtonTitle] = useState('Tarih');

  // AddCard tan Gelen Veriyi al
  const getProductFromCard = product => {
    if (
      product.name === undefined ||
      product.price === undefined ||
      product.price == 0
    ) {
      return;
    }
    if (selectedButtonTitle === 'Artan Fiyat') {
      setProductList(
        [...productList, product].sort((a, b) => a.price - b.price),
      );
    }
    if (selectedButtonTitle === 'Azalan Fiyat') {
      setProductList(
        [...productList, product].sort((a, b) => b.price - a.price),
      );
    }
    if (selectedButtonTitle === 'Tarih') {
      setProductList([...productList, product].sort((a, b) => a.date - b.date));
    }
  };

  // SelectButonun Başlığına Göre seçili butonu belirleme
  const getTitleFromSelectedButton = title => {
    setSelectedButtonTitle(title);
  };

  // selectButonun seçili olduğu duruma göre sıralama
  useEffect(() => {
    if (selectedButtonTitle === 'Artan Fiyat') {
      setProductList([...productList].sort((a, b) => a.price - b.price));
    }
    if (selectedButtonTitle === 'Azalan Fiyat') {
      setProductList([...productList].sort((a, b) => b.price - a.price));
    }
    if (selectedButtonTitle === 'Tarih') {
      setProductList([...productList].sort((a, b) => a.date - b.date));
    }
  }, [selectedButtonTitle]);

  // FlatList Render Metodu
  const renderProduct = ({item}) => {
    return <ProductCard name={item.name} price={item.price} />;
  }

  const itemSeparator = ()=>{
    return(<Divider/>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SelectButton
          title="Artan Fiyat"
          sendTitle={getTitleFromSelectedButton}
          isSelected={selectedButtonTitle === 'Artan Fiyat'}
        />
        <SelectButton
          title="Azalan Fiyat"
          sendTitle={getTitleFromSelectedButton}
          isSelected={selectedButtonTitle === 'Azalan Fiyat'}
        />
        <SelectButton
          title="Tarih"
          sendTitle={getTitleFromSelectedButton}
          isSelected={selectedButtonTitle === 'Tarih'}
        />
      </View>
      <FlatList data={productList} renderItem={renderProduct} ItemSeparatorComponent={itemSeparator} />
      <Divider/>
      <AddCard sendProduct={getProductFromCard} />
    </View>
  );
};

export default App;
