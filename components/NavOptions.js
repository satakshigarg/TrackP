import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Regular",
        image: "https://www.freepnglogos.com/uploads/ambulance-png/ambulance-interests-the-school-counselor-kind-8.png",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Emergency",
        image: 'https://www.freepnglogos.com/uploads/ambulance-png/ambulance-gidc-digital-directory-abe-sayaji-tempo-31.png',
        screen: "MapScreen"
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && "opacity-20"}`}>
                    {/* <View> */}
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright" 
                            color="white" 
                            type="antdesign" 
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;