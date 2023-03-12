import Checkbox from 'expo-checkbox'
import { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import UserName from '../../contexts/userName'
import tw from '../../library/tailwind'
import { getSavedLogin, setSavedLogin } from '../../utils/remember'
import { InputIcon, InputPass, OuterHeader, HxLogoIcon } from '../Resource'

export default function Login() {
    const { userName, setUserName } = useContext(UserName)

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    // login save
    useEffect(() => {
        getSavedLogin(setIdentifier, setPassword, setRememberMe)
    }, [])

    const handleSubmit = () => {
        if (identifier === '01927194591' && password === '1234') {
            setUserName('Morshedul Bari Antor')
        } else {
            alert('wrong info!')
        }
    }

    return (
        <View style={tw`wrapper`}>
            <HxLogoIcon position="start" />
            <OuterHeader title="Welcome Back!" subTitle="Login to your account" mb="30" />

            <View>
                <InputIcon icon="phone" label="Phone or Email">
                    <TextInput
                        style={tw`input`}
                        placeholder=""
                        keyboardType="default"
                        autoCapitalize="none"
                        onChangeText={(e) => setIdentifier(e)}
                        defaultValue={identifier}
                        required
                    />
                </InputIcon>

                <InputPass label="Password" isOpen={isOpen} setIsOpen={setIsOpen}>
                    <TextInput
                        style={tw`input`}
                        placeholder=""
                        secureTextEntry={isOpen ? true : false}
                        onChangeText={(e) => setPassword(e)}
                        defaultValue={password}
                        required
                    />
                </InputPass>
            </View>

            <View style={tw`${styles.remember_forget}`}>
                <View style={tw`${styles.checked}`}>
                    <Checkbox
                        value={rememberMe}
                        onValueChange={(e) => setRememberMe(e)}
                        color={rememberMe ? '#419cd9' : undefined}
                    />
                    <Text style={tw`text-dark_grey`}>Remember Me</Text>
                </View>
                <Text style={tw`${styles.forgot_password}`}>Forgot Password?</Text>
            </View>

            <View style={tw`mt-[30px]`}>
                <TouchableOpacity style={tw`mx-auto`}>
                    <Text
                        style={tw`log_btn`}
                        onPress={() => {
                            setSavedLogin(rememberMe, identifier, password)
                            handleSubmit()
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={tw`${styles.have_account}`}>
                Don't have account? <Text style={tw`${styles.register_now}`}>Register Now!</Text>
            </Text>

            <Text>Name: {userName}</Text>
        </View>
    )
}

const styles = {
    remember_forget: 'flex-row justify-between items-center mt-[18px]',
    checked: 'flex-row items-center gap-2',
    forgot_password: 'text-secondary font-700',
    register_now: 'text-secondary font-700',
    have_account: 'text-center mt-[16px] text-grey font-500',
}
