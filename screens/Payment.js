import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "tailwind-react-native-classnames";
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Payment = ({route}) => {
    const data = route.params;
    const navigator = useNavigation()
    console.log(data);

    const handlePayment = () => {
        // Payment Logic here
        console.log("Payment Processing...")
        // After payment navigate back to homescreen or success screen as per choice
        navigator.navigate("HomeScreen")
    }
  return (
    <SafeAreaView style={tw`bg-white flex-grow p-4`}>
        <Text style={tw`text-3xl font-bold`}>Payment Page</Text>
        <View style={tw`mt-5`}>
            <Text style={tw`text-xl font-bold`}>Booking Details</Text>
            <Text style={tw`text-lg`}>Type: {data?.title}</Text>
            <Text style={tw`text-lg`}>Total: {data?.price}</Text>
            <Text style={tw`text-lg`}>Duration: {data?.distance?.text}</Text>
            <Text style={tw`text-lg`}>Time: {data?.duration?.text}</Text>            
        </View>

        <View style={tw`mt-auto`}>
            <Text style={tw`text-lg font-bold`}>Fare Breakup</Text>
            <View style={styles.table}>
                <Text>Base Fare [BF]: {45/100} * {data?.duration?.text}({data?.duration?.value}) = {0.45*data?.duration?.value}</Text>
                <Text>Plan Premium (Multiplier): {data?.multiplier}</Text>
                <Text>Grand Total (BF*Multiplier): {data?.price}</Text>
            </View>
        </View>


        <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          onPress={handlePayment}
          style={tw`bg-gray-700 py-3 m-3 ${"bg-gray-400"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Pay {data?.price}
          </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    table:{
        display: 'grid',
        gridCols: 2
    }
})
export default Payment