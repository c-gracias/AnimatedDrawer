import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';

export function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Home Page</Text>
        <Button
          title="Cart Page"
          onPress={() =>
            navigation.navigate('Cart', {userId: '123', productId: '456'})
          }
        />
        <Button
          title="Favourites Page"
          onPress={() => navigation.navigate('Favourites')}
        />
        <Button
          title="Orders Page"
          onPress={() => navigation.navigate('Orders', {orderId: 'ORD-789'})}
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
