import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavouritesForHome from '../components/NavFavouritesForHome';


const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`p-5`}>
        <Image
            style={{
                width: 200,
                height: 50,
                resizeMode: 'contain',
            }}
            source={{
                uri: 'https://trackplus.cloud/img/logo_light.png'
                // uri: 'https://trackplus.com.br/wp-content/uploads/2023/01/cropped-trackpluslogo-removebg-preview-1.png'
                // uri: 'https://trackplus.com.br/wp-content/uploads/2023/01/cropped-trackpluslogo-removebg-preview-1.png'
                // uri: 'https://www.freepnglogos.com/uploads/medical-logo-png-7.png',
            }}
        />

        <GooglePlacesAutocomplete 
          placeholder='Where from?'
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            loc = details.geometry.location;
            dsc = data.description;
            console.log(loc)
            console.log(dsc)
            dispatch(setOrigin({
              location: loc,
              description: dsc
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails = {true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}

          query= {{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
        <NavFavouritesForHome />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});