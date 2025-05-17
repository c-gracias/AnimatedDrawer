import React from 'react';
import {Navigation} from './src/navigation/StackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigation/DrawerNavigator';

function App(): React.JSX.Element {
  return (
    <>
      <SafeAreaProvider>
        <DrawerNavigator>
          <Navigation />
        </DrawerNavigator>
      </SafeAreaProvider>
    </>
  );
}

export default App;
