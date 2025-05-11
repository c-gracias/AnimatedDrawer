import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Homescreen';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Login: HomeScreen,
    Home: HomeScreen,
    Cart: HomeScreen,
    Favourites: HomeScreen,
    Orders: HomeScreen,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(RootStack);
