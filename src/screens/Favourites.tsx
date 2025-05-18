import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

export function FavouritesScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Favourites</Text>

        <Button title="Cart Page" onPress={() => navigation.navigate('Cart')} />
        <Button title="Home Page" onPress={() => navigation.navigate('Home')} />
        <Button
          title="Orders Page"
          onPress={() => navigation.navigate('Orders')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
