import { Octicons } from '@expo/vector-icons'
import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import UserName from '../../contexts/userName'
import tw from '../../library/tailwind'
import { Wrapper } from '../Resource'

export default function Home({ navigation }) {
    const { userName, setUserName } = useContext(UserName)

    const handleSubmit = () => {
        setUserName('Welcome!')
    }

    return (
        // <Wrapper>
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Octicons style={tw`mx-auto mt-[-60px] mb-[0px]`} name="device-mobile" size={44} color="black" />
            <Text style={tw`font-700 text-[18px] mb-[10px]`}>React Native Expo Boilerplate</Text>

            <TouchableOpacity>
                <Text style={tw`log_btn`} onPress={handleSubmit}>
                    Press
                </Text>
            </TouchableOpacity>

            <Text>{userName}</Text>
        </View>
        // </Wrapper>
    )
}
