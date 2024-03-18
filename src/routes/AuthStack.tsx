import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Signup from '../screens/Signup'
import Login from '../screens/Login'
import { NavigationContainer } from '@react-navigation/native'

export type AuthStackParamList = {
    Signup: undefined;
    Login: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false
      }}
      >
        <Stack.Screen name="Login" component={Login} options={{title:'Login'}}/>
        <Stack.Screen name="Signup" component={Signup} options={{title:'Signup'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack