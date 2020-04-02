import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';



const LoginScreen = ({route}) => {
    const [ userName, setUserName ] = useState(route.params.userName);
    const [ password, setPassword ] = useState('');

        return (
        <SafeAreaView>
            <Text>Veuillez saisir votre nom svp</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputText}
                value={userName}
                placeholder={userName}
                onChangeText={(e) => setUserName(e.target.value)}
            />
            <Text>Veuillez saisir votre mot de passe svp</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputText}
                value={password}
                onChangeText={setPassword}
            />
        </SafeAreaView>
            );
        };


const styles = StyleSheet.create({
    inputText: {
        fontSize: 24,
        width: 180,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5
    }
});

export default LoginScreen;