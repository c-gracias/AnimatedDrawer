import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

export function OrdersScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Orders Page</Text>

        <Button title="Cart Page" onPress={() => navigation.navigate('Cart')} />
        <Button
          title="Favourites Page"
          onPress={() => navigation.navigate('Favourites')}
        />
        <Button title="Home Page" onPress={() => navigation.navigate('Home')} />
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
