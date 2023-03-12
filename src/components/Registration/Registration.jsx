import { Picker } from '@react-native-picker/picker'
import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import tw from '../../library/tailwind'
import { HxLogoIcon, InputIcon, InputPass, OuterHeader, Wrapper } from '../Resource'

export default function Registration({ navigation }) {
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const [tick, setTick] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Wrapper>
            <HxLogoIcon position="start" />
            <OuterHeader title="Register" subTitle="Create account and enjoy all services" mb="6" />

            <View>
                <InputIcon icon="user" label="Name">
                    <TextInput style={tw`input`} placeholder="" keyboardType="default" required />
                </InputIcon>

                <InputIcon icon="phone" label="Phone">
                    <TextInput style={tw`input`} placeholder="" keyboardType="phone-pad" required />
                </InputIcon>

                <InputIcon icon="command" label="Gender">
                    <Picker
                        style={tw`${styles.gender}`}
                        selectedValue={gender}
                        onValueChange={(e) => setGender(e)}
                        required>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Others" value="others" />
                    </Picker>
                    <Text style={tw`${styles.gender_select}`}></Text>
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

                <View style={tw`${styles.warning}`}>
                    <Text style={tw`${password.length > 3 ? styles.tic : styles.cross}`}>
                        {password.length > 3 ? '✔' : '✘'}
                    </Text>
                    <Text style={tw`${styles.warning_text}`}>Minimum 4 characters</Text>
                </View>
                <InputPass label="Confirm Password" isOpen={isOpen} setIsOpen={setIsOpen}>
                    <TextInput style={tw`input`} placeholder="" secureTextEntry={isOpen ? true : false} required />
                </InputPass>
            </View>

            <View style={tw`${styles.checkbox}`}>
                <Checkbox
                    value={tick}
                    onValueChange={(e) => setTick(e)}
                    color={tick ? '#419cd9' : undefined}
                    required
                />
                <Text style={tw`text-grey`}>
                    I agree to the company <Text style={tw`text-dark`}>Term of Service</Text> and{' '}
                    <Text style={tw`text-dark`}>Privacy Policy </Text>
                </Text>
            </View>

            <View style={tw`mt-[10px]`}>
                <TouchableOpacity style={tw`mx-auto`}>
                    <Text style={tw`log_btn`}>Register</Text>
                </TouchableOpacity>
            </View>

            <Text style={tw`${styles.have_account}`}>
                Have an account?{' '}
                <Text style={tw`${styles.register_now}`} onPress={() => navigation.navigate('login')}>
                    Login!
                </Text>
            </Text>
        </Wrapper>
    )
}

const styles = {
    gender: 'text-grey ml-[-16px] mt-[-6px] text-[20px]',
    gender_select: 'input mb-[-10px] mt-[-36px]',
    warning: 'flex-row gap-2 mt-[10px] mb-[-10px]',
    warning_text: 'text-grey',
    tic: 'text-green',
    cross: 'text-red',
    checkbox: 'flex-row gap-2 mt-[20px]',
    register_now: 'text-secondary font-700',
    have_account: 'text-center mt-[16px] text-grey font-500 pb-[80px]',
}
