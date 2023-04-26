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
import SignUp from './screens/SignUp';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

// WebBrowser.maybeCompleteAuthSession();

export default function App() {
  // const [accessToken, setAccessToken] = useState(null);
  // consr [user, setUser] = useState(null);
  // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //   clientId:'',
  //   iosClientId: ''
  // });

  // React.useEffect(() => {
  //   if (response?.type === "success") {
  //     setAccessToken(response.authentication.accessToken);
  //     accessToken && fetchUserInfo();
  //   }
  // }, [response, accessToken])

  // async function fetchUserInfo() {
  //   let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`
  //     }
  //   })
  //   const useInfo = await response.json();
  //   setUser(useInfo);
  // }

  // const ShowUserInfo = () => {
  //   if(user) {
  //     return (
  //       <View style={}>
  //         <Text style={}></Text>
  //       </View>
  //     )
  //   }
  // }
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
            {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
            /> */}
            {/* <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
            /> */}
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
          </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
