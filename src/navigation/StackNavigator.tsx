import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Homescreen';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {LoginScreen} from '../screens/Login';
import {CartScreen} from '../screens/Cart';
import {FavouritesScreen} from '../screens/Favourites';
import {OrdersScreen} from '../screens/Orders';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, View, Text} from 'react-native';
import {useDrawer} from '../stores/drawer.store';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {styles} from './styled';

const HeaderLeft = (props: NativeStackHeaderProps) => {
  const toggleDrawer = useDrawer(state => state.toggle);

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
        <Icon name="menu" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={{fontSize: 18}}>{props.options?.title}</Text>
    </View>
  );
};

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    header: HeaderLeft,
  },
  screens: {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Home',
      },
    },
    Cart: {
      screen: CartScreen,
      options: {
        title: 'Shopping Cart',
      },
    },
    Favourites: {
      screen: FavouritesScreen,
      options: {
        title: 'Favourites',
      },
    },
    Orders: {
      screen: OrdersScreen,
      options: {
        title: 'My Orders',
      },
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(RootStack);
