import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import NavigateCard2 from "./NavigateCard2";
import { Image } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "TrackPlusPlus",
    title: "Advance",
    multiplier: 1.5,
    image:
      "https://www.freepnglogos.com/uploads/ambulance-png/ambulance-upv-idean-sistema-para-tiempo-respuesta-1.png",
  },
];

const SURGE_CHARGE_RATE = 60;

const RideOptionsCard2 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const timeTaken = travelTimeInformation?.duration?.value / 80;

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigateCard2)}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Book an Ambulance - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6 `}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{Math.floor(timeTaken)} min Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "INR",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          onPress={() =>
            navigation.navigate("PaymentScreen", {
              ...selected,
              ...travelTimeInformation,
              price:
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  selected?.multiplier) /
                100,
            })
          }
          style={tw`bg-gray-700 py-3 m-3 ${!selected && "bg-gray-400"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard2;

const styles = StyleSheet.create({});
