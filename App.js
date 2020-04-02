import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons';


import AllMessagesScreen from './src/screen/AllMessagesScreen';
import WelcomScreen from './src/screen/WelcomScreen';
import LoginScreen from './src/screen/LoginScreen';
import ColorScreen from './src/screen/ColorScreen';


const {Navigator, Screen} = createStackNavigator ();

const App = (props) => {
  return (
    <NavigationContainer>
      <Navigator 
      initialRouteName="Welcome" 
      screenOptions={{
        headerStyle:{backgroundColor:'green'},headerTintColor: 'white', 
        headerTintStyle:{fontSize: 25}
      }} >
      <Screen name="Welcome" component={WelcomScreen} options=
      {{ title: 'Bienvenue!',
      headerRight:() => (
      <TouchableOpacity onPress={()=> alert('Login')} style={styles.clickable}>
        <AntDesign name="login" style={{ fontSize: 32 }} />
      </TouchableOpacity> )
     }} />
      <Screen name="AllMessages" 
      component={AllMessagesScreen} 
      options={{title: 'Messages'}} />

      <Screen name="Login" component={LoginScreen} options={{ headerTitle: <AntDesign name="user" style={{ fontSize: 32 }} /> }} />
      <Screen name="Colors" component={ColorScreen} options={{title:'Encore des couleurs!'}} />
      </Navigator>
    </NavigationContainer>
    );
};
  
const styles = StyleSheet.create({
  text: { fontSize: 38 },
  clickable: {
      borderColor: 'black',
      borderWidth: 1,
      margin: 5,
      padding: 5
  }
});

export default App;
  


