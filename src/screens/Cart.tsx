import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

export function CartScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Cart Page</Text>

        <Button title="Home Page" onPress={() => navigation.navigate('Home')} />
        <Button
          title="Favourites Page"
          onPress={() => navigation.navigate('Favourites')}
        />
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
