import { Feather } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import tw from '../../../library/tailwind'

export default function InputIcon({ children, icon, label }) {
    return (
        <View style={tw`mt-8`}>
            <View style={tw`labels`}>
                <Feather name={icon} size={24} color="grey" />
                <Text style={tw`label`}>{label}</Text>
            </View>
            {children}
        </View>
    )
}
