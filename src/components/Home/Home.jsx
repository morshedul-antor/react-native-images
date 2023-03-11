import { useState, useContext } from 'react'
import { View, Text, TextInput } from 'react-native'
import UserName from '../../contexts/userName'
import tw from '../../library/tailwind'

export default function Home() {
    const { userName, setUserName } = useContext(UserName)

    const [identifier, setIdentifier] = useState('')
    // const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if (identifier === 'antor') {
            setUserName('Morshedul Bari Antor')
        } else {
            setUserName('Wrong Name!')
        }
    }

    return (
        <View style={tw`flex-1 justify-center items-center bg-deep_primary`}>
            <TextInput
                style={tw`bg-white p-[10px] rounded`}
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(e) => setIdentifier(e)}
                defaultValue={identifier}
                placeholder=""
                required
            />
            <Text style={tw`log_btn`} onPress={handleSubmit}>
                HEALTHx
            </Text>
            <Text style={tw`text-white`}>Name: {userName}</Text>
        </View>
    )
}
