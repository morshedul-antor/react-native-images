import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Home, Login } from './src/components'
import { UserNameProvider } from './src/contexts/userName'
import tw from './src/library/tailwind'

export default function App() {
    return (
        <UserNameProvider>
            {/* main view part */}
            <View style={tw`${styles.root}`}>
                <StatusBar style="auto" />
                <Login />
                {/* <Home /> */}
            </View>
            {/* end */}
        </UserNameProvider>
    )
}

const styles = {
    root: 'w-full h-full mt-[40px]',
}
