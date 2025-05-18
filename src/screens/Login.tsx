import {useNavigation} from '@react-navigation/native';
import {Fragment} from 'react';
import {Button, Text, View} from 'react-native';

export function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Text>Login</Text>
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
