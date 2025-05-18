import React, {Fragment} from 'react';
import {Navigation} from './src/navigation/StackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DrawerMenu} from './src/navigation/DrawerMenu';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {RootNavigator} from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
            {/* <DrawerMenu><Navigation /></DrawerMenu> */}
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
