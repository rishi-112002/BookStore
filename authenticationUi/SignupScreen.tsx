import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import AppIconComponent from "../reuseableComponent/AppIconImage";
import ButtonComponent from "../reuseableComponent/ButtonComponent";
import TextInputCom from "../reuseableComponent/TextInputComponent";

function SignupScreen({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    const handleSignInAuth = () => {
        if (!name) {
            Alert.alert("waning", "Please enter name")
            return
        }
        if (!email) {
            Alert.alert("waning", "Please enter email")
            return
        }
        handleEmail();
    }
    const handleEmail = () => {
        if (!emailRegex.test(email)) {
            Alert.alert("warning", "entered email is invalid")
            console.log("Valid email")
            return
        }
        handlePassword();
    }
    const handlePassword = () => {
        if (!password) {
            Alert.alert("Warning", "Please enter password");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Warning", "Password is invalid (less than 6 characters)");
            return;
        }
        console.log("Valid email and password");
    };
    return (
        <ScrollView style={style.container}>
            <View >
                <AppIconComponent />
                <Text style={{ alignSelf: 'center', color: 'black', marginTop: 20, marginBottom: 50, fontSize: 20, fontWeight: 'bold' }}>
                    Sign up
                </Text>
                <Text style={style.inputText}>
                    Name
                </Text>
                <TextInputCom
                    value={name}
                    onChangeText={(text: React.SetStateAction<string>) => setName(text)}
                    placeholder="Rajes" secureTextEntry={false} />
                <Text style={style.inputText}>
                    Email
                </Text>
                <TextInputCom
                    value={email}
                    onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
                    placeholder="abc@gmial.com" secureTextEntry={false} />
                <Text style={style.inputText}>
                    Password
                </Text>
                <TextInputCom
                    value={password}
                    onChangeText={((text: React.SetStateAction<string>) => setPassword(text))}
                    placeholder="min 6 character" secureTextEntry={true} />
                <ButtonComponent buttonTittle="Sign up" onPress={() => handleSignInAuth()} />
                <Text style={{ alignSelf: 'center', color: 'blue', marginTop: 20, fontSize: 14, marginEnd: 15, fontWeight: 'bold' }} onPress={() => navigation.navigate('Login')}>
                    Already have an account, Login?
                </Text>
            </View>
        </ScrollView>)
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginStart: 35,
        marginTop: 15
    },
})

export default SignupScreen;


