import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>

      <FoodListItem item={{lable: 'Pizza', cal:75, brand:'Domino'}} />
      <FoodListItem item={{lable: 'Apple', cal:35, brand:'Vegetable'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:5
  },
});
