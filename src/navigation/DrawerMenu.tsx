import React, {Fragment, useState} from 'react';
import {useDrawer} from '../stores/drawer.store';
import {styles} from './styled';
import {Text, View} from 'react-native';
import {DrawerItem} from './DrawerItem';

export const DrawerMenu = ({children}: {children: React.ReactNode}) => {
  const [activeItem, setActiveItem] = useState('Home');

  const isDrawerOpen = useDrawer(state => state.open);
  const toggleDrawer = useDrawer(state => state.toggle);

  return (
    <Fragment>
      <View
        style={[
          {
            display: isDrawerOpen ? 'flex' : 'none',
          },
          styles.drawerContainer,
        ]}>
        <View style={styles.contentWrapper}>
          <Text style={styles.drawerTitle}>Beka</Text>

          <DrawerItem
            label="Start"
            isActive={activeItem === 'Home'}
            onPress={() => setActiveItem('Home')}
          />

          <DrawerItem
            label="Your Cart"
            isActive={activeItem === 'Cart'}
            onPress={() => setActiveItem('Cart')}
          />

          <DrawerItem
            label="Favourites"
            isActive={activeItem === 'Favourites'}
            onPress={() => setActiveItem('Favourites')}
          />

          <DrawerItem
            label="Your Orders"
            isActive={activeItem === 'Orders'}
            onPress={() => setActiveItem('Orders')}
          />

          <View style={styles.divider} />

          <DrawerItem
            label="Sign Out"
            isActive={false}
            onPress={toggleDrawer}
          />
        </View>
      </View>

      <View style={{display: isDrawerOpen ? 'none' : 'flex', flex: 1}}>
        {children}
      </View>
    </Fragment>
  );
};
