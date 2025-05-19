import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <SafeAreaProvider style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <RootNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </>
  );
}

export default App;
