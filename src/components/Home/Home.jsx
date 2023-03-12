import { Octicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { View, Text } from 'react-native'
import UserName from '../../contexts/userName'
import tw from '../../library/tailwind'
import { HxLogoText, Wrapper } from '../Resource'

export default function Home({ navigation }) {
    const { userName, setUserName } = useContext(UserName)

    const handleSubmit = () => {
        setUserName('Antor')
        navigation.navigate('login')
    }

    return (
        <Wrapper>
            {/* hero part */}
            <View style={tw`bg-secondary`}>
                <View>
                    <Octicons name="three-bars" size={24} color="white" />
                    <HxLogoText position="start" color="white" />
                </View>
                <View>
                    <MaterialCommunityIcons name="login" size={24} color="white" />
                    <Text onPress={handleSubmit}>Login</Text>
                </View>
            </View>
        </Wrapper>
    )
}
