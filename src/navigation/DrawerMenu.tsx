import React, {FC, Fragment} from 'react';
import {styles} from './styled';
import {Text, View} from 'react-native';
import {DrawerItem} from './DrawerItem';
import {useRoute} from '@react-navigation/native';
import {SharedValue} from 'react-native-reanimated';
import {useTypedNavigation} from '../hooks/useTypedNavigation';

export const DrawerMenu: FC<{active: SharedValue<boolean>}> = ({active}) => {
  const navigation = useTypedNavigation();
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
              active.value = false;
              navigation.navigate('Home');
            }}
          />

          <DrawerItem
            label="Your Cart"
            isActive={route?.name === 'Cart'}
            onPress={() => {
              active.value = false;
              navigation.navigate('Cart', {
                userId: '123',
                productId: '456',
              });
            }}
          />

          <DrawerItem
            label="Favourites"
            isActive={route?.name === 'Favourites'}
            onPress={() => {
              active.value = false;
              navigation.navigate('Favourites');
            }}
          />

          <DrawerItem
            label="Your Orders"
            isActive={route?.name === 'Orders'}
            onPress={() => {
              active.value = false;
              navigation.navigate('Orders', {orderId: 'ORD-789'});
            }}
          />

          <View style={styles.divider} />

          <DrawerItem
            label="Sign Out"
            isActive={false}
            onPress={() => {
              active.value = false;
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};
