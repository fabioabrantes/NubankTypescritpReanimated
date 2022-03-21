import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Main} from '../screen/Main';

const {Navigator, Screen} = createStackNavigator();

export const Routes: React.FC = () => {
  return (
  
    <NavigationContainer >
      <Navigator headerMode={'none'} initialRouteName="Main">
        <Screen name="Main" component={Main}/>
      </Navigator>
    </NavigationContainer>
  
  );
}

