import { Feather } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import tw from '../../../library/tailwind'

export default function InputPass({ children, label, isOpen, setIsOpen }) {
    return (
        <View style={tw`mt-8`}>
            <View style={tw`label_icons`}>
                <View style={tw`labels`}>
                    <Feather name="lock" size={24} color="gray" />
                    <Text style={tw`label`}>{label}</Text>
                </View>

                <Feather onPress={() => setIsOpen(!isOpen)} name={isOpen ? 'eye' : 'eye-off'} size={24} color="grey" />
            </View>
            {children}
        </View>
    )
}
