import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Platform } from 'react-native'
import { UserNameProvider } from './src/contexts/userName'
import { HomeScreen } from './src/screens'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <UserNameProvider>
            {/******************** main view part ***********************/}
            <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'android' ? 40 : 10 }}>
                <StatusBar style="auto" />
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
            {/******************** end view part ***********************/}
        </UserNameProvider>
    )
}
