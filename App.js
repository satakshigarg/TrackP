import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Payment from './screens/Payment';
import MapScreen2 from './screens/MapScreen2';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? 'padding': "height"} 
            style={{flex:1}}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
          <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
              headerShown: false,

            }}/>
            <Stack.Screen 
            name="MapScreen"
            component={MapScreen} 
            options={{
              headerShown: false,
              
            }}/>
            <Stack.Screen 
            name="MapScreen2"
            component={MapScreen2} 
            options={{
              headerShown: false,
              
            }}/>
            <Stack.Screen 
            name="PaymentScreen" 
            component={Payment} 
            options={{
              headerShown: false,
              
            }}/>
          </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
