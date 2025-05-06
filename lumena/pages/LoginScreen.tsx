import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your navigation stack's type
type RootStackParamList = {
    HomeScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const LoginScreen: React.FC = () =>  {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        setEmail('loejstarc@gmail.com')
        setPassword('1234')

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            console.log(response.status)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Welcome to Lumena</Text>
        <Text style={styles.subtitle}>Your personal AI assistant</Text>
        <Button
            title="Login"
            onPress={() => navigation.navigate('HomeScreen')}
            color="#841584"
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fcfcfc',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 40,
        color: '#fcfcfc',
    },
});

export default LoginScreen;