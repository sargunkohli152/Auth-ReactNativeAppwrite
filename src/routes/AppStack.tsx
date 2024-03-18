import { AppState, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native'

export type AppStackParamList = {
    Home: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false
      }}
      >
        <Stack.Screen name="Home" component={Home} options={{title:'Home'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack