import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const data = [
    {
        id:'123',
        icon:'home',
        // location:{"lat": 51.5072178,"lng":-0.1275862},
        location: "Home",
        destination:"Code Street, London, UK",
        coordinates: {"lat": 51.5223932, "lng": -0.07082999999999999},
    },
    {
        id:'456',
        icon:'briefcase',
        // location:{"lat":51.5072178,"lng":0.1275862},
        location:"Work",
        destination:"London Eye, London, UK",
        coordinates: {"lat": 51.5032973, "lng": -0.1195537}
    }
  ]

const NavFavouritesForNav = () => {
const navigation = useNavigation();
const dispatch = useDispatch();
  return (
    <FlatList
            data={data}
            // horizontal
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, {height:0.5}]}/>
            )}
            renderItem={({item: {location, destination, icon, coordinates}}) => (
                <TouchableOpacity style={tw`p-5 flex-row items-center`}
                    onPress={() => {
                    dispatch(setDestination({
                      location: coordinates,
                      description: destination
                      })
                    );
                  }}
                >
                    <Icon 
                            style={tw`mr-4 bg-gray-300 rounded-full p-3`}
                            name={icon} 
                            color="white" 
                            type="ionicon" 
                            size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg text-white`}>{location}</Text>
                        <Text style={tw`text-gray-300`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
    />
  )
}

export default NavFavouritesForNav

const styles = StyleSheet.create({})