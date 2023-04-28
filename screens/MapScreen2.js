import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import NavigateCard2 from '../components/NavigateCard2';
import RideOptionsCard2 from '../components/RideOptionsCard2';

const MapScreen2 = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(HomeScreen)} style = {tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard2"
            component={NavigateCard2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="RideOptionsCard2"
            component={RideOptionsCard2}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen2

const styles = StyleSheet.create({})