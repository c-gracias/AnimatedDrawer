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

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Login: LoginScreen,
    Home: HomeScreen,
    Cart: CartScreen,
    Favourites: FavouritesScreen,
    Orders: OrdersScreen,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(RootStack);
