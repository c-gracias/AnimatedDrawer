import {ComponentType} from 'react';
import {CartScreen} from '../screens/Cart';
import {FavouritesScreen} from '../screens/Favourites';
import {HomeScreen} from '../screens/Homescreen';
import {LoginScreen} from '../screens/Login';
import {OrdersScreen} from '../screens/Orders';
import {withDrawer} from './withDrawer';

interface RouteOptions {
  title?: string;
}

interface RouteParams {
  [key: string]: string | number | boolean | undefined;
}

interface RouteConfig<T extends RouteParams = {}> {
  screen: ComponentType<any>;
  options?: RouteOptions;
  params?: {
    [K in keyof T]?: T[K];
  };
}

export type Routes = keyof typeof routeDefinitions;

// Derive a type that maps each Route name to its expected Params type (or {})
export type RouteParamsMap = {
  [K in Routes]: (typeof routeDefinitions)[K] extends {params?: infer P}
    ? P
    : {};
};

export const routeDefinitions = {
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: withDrawer(HomeScreen),
    options: {
      title: 'Home',
    },
  },
  Cart: {
    screen: withDrawer(CartScreen),
    params: {
      userId: '123',
      productId: '456',
    },
    options: {
      title: 'Shopping Cart',
    },
  },
  Favourites: {
    screen: withDrawer(FavouritesScreen),
    options: {
      title: 'Favourites',
    },
  },
  Orders: {
    screen: withDrawer(OrdersScreen),
    params: {
      orderId: 'ORD-789',
    },
    options: {
      title: 'My Orders',
    },
  },
};

export const routes: {[K in Routes]: RouteConfig<RouteParamsMap[K]>} =
  routeDefinitions;
