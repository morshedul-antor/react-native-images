import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Home, Login } from './src/components'
import { UserNameProvider } from './src/contexts/userName'
import tw from './src/library/tailwind'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <UserNameProvider>
            {/* main view part */}
            <View style={tw`${styles.root}`}>
                <StatusBar style="auto" />
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
            {/* end */}
        </UserNameProvider>
    )
}

const styles = {
    root: 'w-full h-full mt-[40px]',
}
