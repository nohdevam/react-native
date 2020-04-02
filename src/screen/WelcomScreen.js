import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



const WelcomScreen = ({navigation}) => {
    const userName = 'martin';
    
    return (
        <SafeAreaView>
        <Text style={styles.text}>Bienvenue chère utilisatrice!</Text>

            <TouchableOpacity onPress={() => navigation.navigate('AllMessages')}>
                <Text style={styles.clickable}>Voir tous les messages</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Colors')}>
                <Text style={styles.clickable}>Allez aux couleurs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login', {userName: userName})} style={styles.clickable}>
        <AntDesign name="login" style={{ fontSize: 32 }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create ({
    text: {fontSize: 38},
    clickable:{
        borderColor:'black',
        borderWidth: 1,
        margin: 5,
        padding:5
    }
});

export default WelcomScreen;