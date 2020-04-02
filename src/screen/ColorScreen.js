import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';



const ColorScreen = (props) => {
    return (
    <SafeAreaView style={{flex:1, 
    flexDirection:'column', 
    justifyContent:'space-around', 
    alignItems:'center',
    flexWrap:'wrap'}}>
        <View style={styles.myDiv} />
        <View style={styles.myDiv} />
        {/*<Image source={require('../assets/image.png')} alt='Un petit bout' /> */}
        <View style={{ ...styles.myDiv, backgroundColor: 'black',
    alignSelf:'40%',
    height:90}} />
        <View style={styles.myDiv} />
        <View style={styles.myDiv} />
        <View style={styles.myDiv} />
        <View style={{ ...styles.myDiv,
        position:'absolute', top:0, right:10}} />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    myDiv: {
        height: 60,
        width: 60,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'grey',
        margin: 15
    }
});


export default ColorScreen;