import React, {FC, Fragment} from 'react';
import {styles} from './styled';
import {Text, View} from 'react-native';
import {DrawerItem} from './DrawerItem';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigator';
import {SharedValue} from 'react-native-reanimated';

export const DrawerMenu: FC<{active: SharedValue<boolean>}> = ({active}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  return (
    <Fragment>
      <View style={styles.drawerContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.drawerTitle}>Beka</Text>

          <DrawerItem
            label="Start"
            isActive={route?.name === 'Home'}
            onPress={() => {
              navigation.navigate('Home');
              active.value = false;
            }}
          />

          <DrawerItem
            label="Your Cart"
            isActive={route?.name === 'Cart'}
            onPress={() => {
              navigation.navigate('Cart', {
                userId: '123',
                productId: '456',
              });
              active.value = false;
            }}
          />

          <DrawerItem
            label="Favourites"
            isActive={route?.name === 'Favourites'}
            onPress={() => {
              navigation.navigate('Favourites');
              active.value = false;
            }}
          />

          <DrawerItem
            label="Your Orders"
            isActive={route?.name === 'Orders'}
            onPress={() => {
              navigation.navigate('Orders', {orderId: 'ORD-789'});
              active.value = false;
            }}
          />

          <View style={styles.divider} />

          <DrawerItem
            label="Sign Out"
            isActive={false}
            onPress={() => {
              navigation.navigate('Login');
              active.value = false;
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};
