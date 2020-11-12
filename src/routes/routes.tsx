import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../pages/Home/HomePage';
import TabsRoutes from './TabsRoutes';

const { Navigator, Screen} = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="TabsRoutes" component={TabsRoutes} />
        {/* <Screen name="HomePage" component={HomePage} /> */}
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;