import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';

const foodItem = [
  {lable: 'Pizza', cal:75, brand:'Domino'},
  {lable: 'Apple', cal:75, brand:'Vegetable'},
  {lable: 'Coffee', cal:75, brand:'Americano'},
  {lable: 'Socola', cal:75, brand:'Meiji'},
  {lable: 'Bean', cal:75, brand:'Peanut'}
]

export default function App() {
  const [search, setSearch] = useState('');

  const performSearch = () => {
    console.warn('Searching for:', search);

    setSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput 
      value={search}
      onChangeText={setSearch}
      placeholder='Search...'
      style={styles.input}
      />
      {search && <Button title='Search' onPress={performSearch} />}

      <FlatList 
      data={foodItem}
      renderItem={({item})=> <FoodListItem item={item}/>}
      contentContainerStyle={{gap:5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10,
    gap:10
  },
  input:{
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
  }
});
