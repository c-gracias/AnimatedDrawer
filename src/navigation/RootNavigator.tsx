import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './Routes';

export type RootStackParamList = {
  [K in keyof typeof routes]: (typeof routes)[K]['params'];
};

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {Object.entries(routes).map(([key, value]) => (
        <Stack.Screen
          key={key}
          name={key as keyof typeof routes}
          component={value.screen}
          options={value.options || {}}
        />
      ))}
    </Stack.Navigator>
  );
};
