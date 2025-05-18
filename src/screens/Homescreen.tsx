import {useNavigation} from '@react-navigation/native';
import {Fragment} from 'react';
import {Button, Text, View} from 'react-native';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Text>Home</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title="Cart Page" onPress={() => navigation.navigate('Cart')} />
        <Button
          title="Favourites Page"
          onPress={() => navigation.navigate('Favourites')}
        />
        <Button
          title="Orders Page"
          onPress={() => navigation.navigate('Orders')}
        />
      </View>
    </Fragment>
  );
}
