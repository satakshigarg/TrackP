import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import RideOptionsCard from './RideOptionsCard'
import NavFavouritesForNav from './NavFavouritesForNav'

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <Text style={tw`text-center py-5 text-xl text-white`}>Select your Destination</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles}

            onPress={(data, details = null) => {
              loc = details.geometry.location;
              dsc = data.description;
              dispatch(setDestination({
                location: loc,
                description: dsc
                }));
                navigation.navigate("RideOptionsCard")
            }}

            fetchDetails= {true}
            enablePoweredByContainer={false}
            returnKeyType= "search"
            minLength={2}

            query= {{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        <NavFavouritesForNav />
      </View>
      <View style={tw`flex-row bg-black justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={tw`flex flex-row justify-between bg-white w-36 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awesome" color="black" size={16}/>
          <Text style={tw`text-black text-center`}>Ambulance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between bg-gray-500 w-36 px-4 py-3 rounded-full`}>
          <Icon name="help-outline" type="ionicon" color="white" size={16}/>
          <Text style={tw`text-white text-center`}>Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})