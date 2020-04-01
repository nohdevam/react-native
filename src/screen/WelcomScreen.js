import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';


const WelcomScreen = (props) => {
    
    return (
        <Text style={styles.text}>Bienvenue chère utilisatrice!</Text>
    )
    
}

const styles = StyleSheet.create ({
    text: {fontSize: 20}
});

export default WelcomScreen;