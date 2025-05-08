import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
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
        setEmail('example@gmail.com')
        setPassword('applebottomjeans')

        try {
            console.log('Logging in...')
            const response = await fetch('http://10.0.2.2:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            console.log(JSON.parse(await response.text()))
            navigation.navigate('HomeScreen')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Welcome to Lumena</Text>
        <Text style={styles.subtitle}>Your personal AI assistant</Text>
        <TextInput
          style={styles.emailInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email address"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.passInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          keyboardType="numeric"
        />
        <Button
            title="Login"
            onPress={handleLogin}
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
        color: '#fcfcfc',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#fcfcfc',
    },
    emailInput: {
        height: 40,
        width: '60%',
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#fcfcfc',
        padding: 10,
        backgroundColor: '#fcfcfc',
    },
    passInput: {
        height: 40,
        width: '60%',
        borderWidth: 2,
        borderColor: '#fcfcfc',
        padding: 10,
        backgroundColor: '#fcfcfc',
    },
});

export default LoginScreen;