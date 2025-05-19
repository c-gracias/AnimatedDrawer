import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {routes} from './Routes';

export type RootStackParamList = {
  [K in keyof typeof routes]: (typeof routes)[K]['params'];
};

export const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          header: () => null,
        }}>
        {Object.entries(routes).map(([key, value]) => (
          <Stack.Screen
            key={key}
            name={key as keyof typeof routes}
            component={value.screen}
            options={value.options || {}}
          />
        ))}
      </Stack.Navigator>
    </>
  );
};
