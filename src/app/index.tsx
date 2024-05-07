import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';

const foodItem = [
  {lable: 'Pizza', cal:75, brand:'Domino'},
  {lable: 'Apple', cal:75, brand:'Vegetable'},
  {lable: 'Coffee', cal:75, brand:'Americano'},
  {lable: 'Socola', cal:75, brand:'Meiji'},
  {lable: 'Bean', cal:75, brand:'Peanut'}
]

export default function App() {
  return (
    <View style={styles.container}>
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
    padding:10
  },
});
