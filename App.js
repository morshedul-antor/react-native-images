import { StatusBar } from 'expo-status-bar'
import { Home } from './src/components'
import { UserNameProvider } from './src/contexts/userName'

export default function App() {
    return (
        <UserNameProvider>
            <StatusBar style="auto" />
            <Home />
        </UserNameProvider>
    )
}
