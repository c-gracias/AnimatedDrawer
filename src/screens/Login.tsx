import {useNavigation} from '@react-navigation/native';
import {Fragment} from 'react';
import {Button, View} from 'react-native';

export function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Fragment>
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
