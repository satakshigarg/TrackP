// // import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// // import React from 'react'
// // import {Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio} from 'native-base'
// // import { FontAwesome5 } from '@expo/vector-icons'
// // import { useNavigation } from '@react-navigation/native'
// // import SignUp from './SignUp'

// // const Login = () => {
// //     const navigation = useNavigation();
// //   return (
// //     <View style= {styles.container}>
// //         <View style={styles.Middle}>
// //             <Text style={styles.LoginText}>Login</Text>
// //         </View>
// //         <View styles={styles.text2}>
// //             <Text>Don't have an account ?</Text>
// //             <TouchableOpacity onPress={() => navigation.navigate(SignUp)}>
// //                 <Text style={styles.signUpText}>Sign Up</Text>
// //             </TouchableOpacity>
// //         </View>
// //         <View style={styles.buttonStyle}>
// //             <View style={styles.emailInput}>
// //                 <Input
// //                     InputLeftElement={
// //                         <Icon
// //                             as={<FontAwesome5 name="user-secret"/>}
// //                             size="sm"
// //                             m={2}
// //                             _light={{
// //                                 color:"white"
// //                             }}
// //                             _dark={{
// //                                 color:"gray.300"
// //                             }}
// //                         />
// //                     }
// //                     variant="outline"
// //                     placeholder='Username or Email'
// //                     _light={{
// //                         placeholderTextColor: "blueGray.400"
// //                     }}
// //                     _dark={{
// //                         placeholderTextColor: "blueGray.50"
// //                     }}
// //                 />
// //             </View>
// //         </View>
// //         <View style={styles.buttonStyleX}>
// //             <View style={styles.emailInput}>
// //                 <Input
// //                     InputLeftElement={
// //                         <Icon
// //                             as={<FontAwesome5 name="key" />}
// //                             size="sm"
// //                             m={2}
// //                             _light={{
// //                                 color:"white"
// //                             }}
// //                             _dark={{
// //                                 color:"gray.300"
// //                             }}
// //                         />
// //                     }
// //                     variant="outline"
// //                     secureTextEntry={true}
// //                     placeholder="Password"
// //                     _light={{
// //                         placeholderTextColor: "blueGray.400"
// //                     }}
// //                     _dark={{
// //                         placeholderTextColor: "blueGray.50"
// //                     }}
// //                 />
// //             </View>
// //         </View>
// //         <View style={styles.buttonStyle}>
// //             <Button style={styles.buttonDesign}>
// //                 LOGIN
// //             </Button>
// //         </View>
// //         <View style={styles.lineStyle}>
// //             <View style={{flex:1, height:1, backgroundColor:"white"}} />
// //             <View>
// //                 <Text style={{width:50, textAlign:'center'}}>Or</Text>
// //             </View>
// //             <View style={{flex:1, height:1, backgroundColor:"white"}} />
// //         </View>

// //         <View style={styles.boxStyle}>
// //             <Box
// //                 onPress={() => navigation.navigate('#')}
// //                 style={{height:80, width:80, marginLeft:20}}
// //                 shadow={3}
// //                 _light={{
// //                     backgroundColor:"gray.50"
// //                 }}
// //                 _dark={{
// //                     backgroundColor:"gray.700"
// //                 }}
// //             >
// //                 <AspectRatio ratio={1/1}>
// //                     <Image
// //                         roundedTop="lg"
// //                         source={{
// //                             uri:"https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
// //                         }}
// //                         alt="image"
// //                     />
// //                 </AspectRatio>
// //             </Box>
// //             <Box
// //                 onPress={() => navigation.navigate('#')}
// //                 style={{height:80, width:80, marginLeft:20}}
// //                 shadow={3}
// //                 _light={{
// //                     backgroundColor:"gray.50"
// //                 }}
// //                 _dark={{
// //                     backgroundColor:"gray.700"
// //                 }}
// //             >
// //                 <AspectRatio ratio={1/1}>
// //                     <Image
// //                         roundedTop="lg"
// //                         source={{
// //                             uri:"https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png"
// //                         }}
// //                         alt="image"
// //                     />
// //                 </AspectRatio>
// //             </Box>
// //         </View>
// //     </View>
// //   )
// // }

// // export default ()=> {
// //     return (
// //         <NativeBaseProvider>
// //             <Login />
// //         </NativeBaseProvider>
// //     )
// // }
// // const styles = StyleSheet.create({
// //     container:{
// //         flex:1,
// //         backgroundColor:"black"
// //     },
// //     LoginText:{
// //         marginTop:100,
// //         fontSize:30,
// //         fontWeight:'bold'
// //     },
// //     Middle:{
// //         alignItems:'center',
// //         justifyContent:'center'
// //     },
// //     text2:{
// //         flexDirection:'row',
// //         justifyContent:'center',
// //         paddingTop: 5
// //     },
// //     signUpText: {
// //         fontWeight: 'bold'
// //     },
// //     emailInput: {
// //         marginTop: 10,
// //         marginRight: 5
// //     },
// //     buttonStyle: {
// //         marginTop:30,
// //         marginLeft:15,
// //         marginRight: 15
// //     },
// //     buttonStyleX: {
// //         marginTop:12,
// //         marginLeft:15,
// //         marginRight: 15
// //     },
// //     buttonDesign: {
// //         backgroundColor: "#026efd"
// //     },
// //     lineStyle: {
// //         flexDirection:'row',
// //         marginTop:30,
// //         marginLeft:15,
// //         marginRight: 15,
// //         alignItems:'center'
// //     },
// //     boxStyle: {
// //         flexDirection:'row',
// //         marginTop:30,
// //         marginLeft:15,
// //         marginRight: 15,
// //         justifyContent:'space-around'
// //     },
// // })
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from '../assets/google_logo.png'

const LoginScreen = () => {
    const navigation = useNavigation()

  const handleLogin = () => {
    console.log("Logging in with google...");
    navigation.navigate("HomeScreen")
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.heading}>TrackP</Text>
      <Text style={styles.subheading}>Welcome to TrackP.</Text>
      <Text style={{ fontSize: 18 }}>Login to Continue</Text>
      <View
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          {/* Google Logo */}
          <Image
            source={GoogleLogo}
            style={styles.logo}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: "#F9FBFC",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 5,
  },
  subheading: {
    marginTop: 30,
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
  },
  loginBtn: {
    display: "flex",
    flexDirection: 'row',
    gap: "10rem",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'center'
  },
  logo: {
    width: 30,
    height: 30
  }
});

export default LoginScreen;
// import { Icon } from 'native-base'
// const SCREEN_HEIGHT = Dimensions.get('window').height
// import * as Animatable from 'react-native-animatable'

// class LoginScreen extends Component {

//     static navigationOptions = {
//         header: null
//     }

//     constructor() {
//         super()

//         this.state = {
//             placeholderText: 'Enter your mobile number'
//         }
//     }
//     componentWillMount() {

//         this.loginHeight = new Animated.Value(150)

//         this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)

//         this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)

//         this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)

//         this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)

//         this.keyboardHeight = new Animated.Value(0)
//         this.forwardArrowOpacity = new Animated.Value(0)
//         this.borderBottomWidth = new Animated.Value(0)
//     }

//     keyboardWillShow = (event) => {

//         if (Platform.OS == 'android') {
//             duration = 100
//         }
//         else {
//             duration = event.duration
//         }

//         Animated.parallel([

//             Animated.timing(this.keyboardHeight, {
//                 duration: duration + 100,
//                 toValue: event.endCoordinates.height + 10
//             }),
//             Animated.timing(this.forwardArrowOpacity, {
//                 duration: duration,
//                 toValue: 1
//             }),
//             Animated.timing(this.borderBottomWidth, {
//                 duration: duration,
//                 toValue: 1
//             })

//         ]).start()

//     }

//     keyboardWillHide = (event) => {

//         if (Platform.OS == 'android') {
//             duration = 100
//         }
//         else {
//             duration = event.duration
//         }

//         Animated.parallel([

//             Animated.timing(this.keyboardHeight, {
//                 duration: duration + 100,
//                 toValue: 0
//             }),
//             Animated.timing(this.forwardArrowOpacity, {
//                 duration: duration,
//                 toValue: 0
//             }),
//             Animated.timing(this.borderBottomWidth, {
//                 duration: event.duration,
//                 toValue: 0
//             })

//         ]).start()
//     }

//     increaseHeightOfLogin = () => {

//         this.setState({ placeholderText: '092123456789' })
//         Animated.timing(this.loginHeight, {
//             toValue: SCREEN_HEIGHT,
//             duration: 500
//         }).start(() => {

//             this.refs.textInputMobile.focus()
//         })
//     }

//     decreaseHeightOfLogin = () => {

//         Keyboard.dismiss()
//         Animated.timing(this.loginHeight, {
//             toValue: 150,
//             duration: 500
//         }).start()
//     }
//     render() {
//         const headerTextOpacity = this.loginHeight.interpolate({
//             inputRange: [150, SCREEN_HEIGHT],
//             outputRange: [1, 0]
//         })
//         const marginTop = this.loginHeight.interpolate({
//             inputRange: [150, SCREEN_HEIGHT],
//             outputRange: [25, 100]
//         })
//         const headerBackArrowOpacity = this.loginHeight.interpolate({
//             inputRange: [150, SCREEN_HEIGHT],
//             outputRange: [0, 1]
//         })
//         const titleTextLeft = this.loginHeight.interpolate({
//             inputRange: [150, SCREEN_HEIGHT],
//             outputRange: [100, 25]
//         })
//         const titleTextBottom = this.loginHeight.interpolate({
//             inputRange: [150, 400, SCREEN_HEIGHT],
//             outputRange: [0, 0, 100]
//         })
//         const titleTextOpacity = this.loginHeight.interpolate({
//             inputRange: [150, SCREEN_HEIGHT],
//             outputRange: [0, 1]
//         })

//         return (
//             <View style={{ flex: 1 }}>

//                 <Animated.View
//                     style={{
//                         position: 'absolute',
//                         height: 60, width: 60,
//                         top: 60,
//                         left: 25,
//                         zIndex: 100,
//                         opacity: headerBackArrowOpacity//animated
//                     }}
//                 >
//                     <TouchableOpacity
//                         onPress={() => this.decreaseHeightOfLogin()}
//                     >
//                         <Icon name="md-arrow-back" style={{ color: 'black' }} />
//                     </TouchableOpacity>
//                 </Animated.View>

//                 <Animated.View
//                     style={{
//                         position: 'absolute',
//                         height: 60, width: 60,
//                         right: 10,
//                         bottom: this.keyboardHeight, // animated
//                         opacity: this.forwardArrowOpacity,//animated
//                         zIndex: 100,
//                         backgroundColor: '#54575e',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         borderRadius: 30
//                     }}
//                 >
//                     <Icon name="md-arrow-forward" style={{ color: 'white' }} />
//                 </Animated.View>

//                 <ImageBackground
//                     source = {{
//                         uri:"https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
//                     }}
//                     style={{ flex: 1 }}
//                 >
//                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                         <Animatable.View
//                             animation="zoomIn" iterationCount={1}
//                             style={{ backgroundColor: 'white', height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
//                             <Text style={{ fontWeight: 'bold', fontSize: 26 }}>UBER</Text>
//                         </Animatable.View>
//                     </View>

//                     {/** BOTTOM HALF **/}
//                     <Animatable.View animation="slideInUp" iterationCount={1}>

//                         <Animated.View
//                             style={{
//                                 height: this.loginHeight,//animated
//                                 backgroundColor: 'white'

//                             }}
//                         >
//                             <Animated.View
//                                 style={{
//                                     opacity: headerTextOpacity,//animated
//                                     alignItems: 'flex-start',
//                                     paddingHorizontal: 25,
//                                     marginTop: marginTop//animated
//                                 }}
//                             >
//                                 <Text
//                                     style={{ fontSize: 24 }}
//                                 >Get moving with Uber</Text>
//                             </Animated.View>

//                             <TouchableOpacity
//                                 onPress={() => this.increaseHeightOfLogin()}
//                             >
//                                 <Animated.View
//                                     style={{
//                                         marginTop: marginTop,//animated
//                                         paddingHorizontal: 25,
//                                         flexDirection: 'row',
//                                     }}
//                                 >
//                                     <Animated.Text
//                                         style={{
//                                             fontSize: 24, color: 'gray',
//                                             position: 'absolute',
//                                             bottom: titleTextBottom,//animated
//                                             left: titleTextLeft,//animated
//                                             opacity: titleTextOpacity//animated
//                                         }}
//                                     >
//                                         Enter your mobile number
//                                 </Animated.Text>

//                                     <Image
//                                         source={{
//                                             uri: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
//                                         }}
//                                         style={{ height: 24, width: 24, resizeMode: 'contain' }}
//                                     />
//                                     <Animated.View
//                                         pointerEvents="none"
//                                         style={{
//                                             flexDirection: 'row',
//                                             flex: 1,
//                                             borderBottomWidth: this.borderBottomWidth//animated
//                                         }}
//                                     >
//                                         <Text style={{
//                                             fontSize: 20,
//                                             paddingHorizontal: 10

//                                         }}>+91</Text>

//                                         <TextInput
//                                             keyboardType="numeric"
//                                             ref="textInputMobile"
//                                             style={{ flex: 1, fontSize: 20 }}
//                                             placeholder={this.state.placeholderText}
//                                             underlineColorAndroid="transparent"
//                                         />
//                                     </Animated.View>
//                                 </Animated.View>
//                             </TouchableOpacity>

//                         </Animated.View>
//                         <View
//                             style={{
//                                 height: 70,
//                                 backgroundColor: 'white',
//                                 alignItems: 'flex-start',
//                                 justifyContent: 'center',
//                                 borderTopColor: '#e8e8ec',
//                                 borderTopWidth: 1,
//                                 paddingHorizontal: 25
//                             }}
//                         >
//                             <Text
//                                 style={{
//                                     color: '#5a7fdf', fontWeight: 'bold'
//                                 }}
//                             >
//                                 Or connect using a social account
//                             </Text>
//                         </View>
//                     </Animatable.View>
//                 </ImageBackground>

//             </View>
//         );
//     }
// }
// export default LoginScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
