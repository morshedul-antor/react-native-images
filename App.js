import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import tw from './src/library/tailwind'

export default function App() {
    return (
        <View style={tw`flex-1 justify-center items-center bg-deep_primary`}>
            <Text style={tw`log_btn`}>HEALTHx</Text>
            <StatusBar style="auto" />
        </View>
    )
}
