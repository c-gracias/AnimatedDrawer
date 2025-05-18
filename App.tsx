import React from 'react';
import {Navigation} from './src/navigation/StackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DrawerMenu} from './src/navigation/DrawerMenu';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <DrawerMenu>
            <Navigation />
          </DrawerMenu>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
